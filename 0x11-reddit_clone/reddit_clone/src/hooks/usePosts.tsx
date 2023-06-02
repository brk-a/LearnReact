import { authModalState } from '@/atoms/authModalAtom';
import { communityState } from '@/atoms/communitiesAtom';
import { Post, PostVote, postState } from '@/atoms/postsAtom';
import { auth, firestore, storage } from '@/firebase/clientApp';
import { collection, deleteDoc, doc, getDoc, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const usePosts = () => {
    const [user] = useAuthState(auth)
    const [postStateValue, setPostStateValue] = useRecoilState(postState)
    const currentCommunity = useRecoilValue(communityState).currentCommunity
    const setAuthModalState = useSetRecoilState(authModalState)
    const router = useRouter()
    
    const onVote = async (
        event: React.MouseEvent<SVGElement, MouseEvent>,
        post: Post,
        vote: number,
        communityId: string
        ) => {
        //prevent children prop functions from flowing to parent and vv
        event.stopPropagation()

        //user logged in? yes, carry on. no, open auth modal
        if(!user?.uid){
            setAuthModalState({open: true, view: 'login'})
            return
        }

        // setVoteLoading(true)
        try {
            const {voteStatus} = post
            const  existingVote = postStateValue.postVotes.find(
                vote => vote.postId === post.id
            )

            const batch = writeBatch(firestore)

            //copies of state. will be mutated in the susequent if-else stmts
            const updatedPost = {...post}
            const updatedPosts = [...postStateValue.posts]
            let updatedPostVotes = [...postStateValue.postVotes]
            let voteChange = vote

            if (!existingVote) {
                // create a new postVote doc
                const postVoteRef = doc(
                    collection(firestore, 'users', `${user?.uid}/postVotes`)
                )

                const newVote: PostVote = {
                    id: postVoteRef.id,
                    postId: post.id!,
                    communityId,
                    voteValue: vote
                }

                batch.set(postVoteRef, newVote)

                // add/sub 1 to/from post.voteStatus
                updatedPost.voteStatus = voteStatus + vote
                updatedPostVotes = [...updatedPostVotes, newVote]

            } else { //existing vote: user has voted on post; wants to modify vote
                const postVoteRef = doc(firestore, 'users', `${user?.uid}/postVotes/${existingVote.id}`)

                if(existingVote.voteValue === vote){ //removing vote {either up -> neutral or down -> neutral}
                    // add/sub 1 to/from post.voteStatus
                    updatedPost.voteStatus = voteStatus - vote
                    updatedPostVotes = updatedPostVotes.filter(vote => vote.id !== existingVote.id)

                    // delete  postVote doc
                    batch.delete(postVoteRef)

                    voteChange *= -1
    
                } else { //reversing position/opinion/vote {either up -> down or down -> up}
                    // add/sub 2 to/from post.voteStatus
                    updatedPost.voteStatus = voteStatus + 2 * vote
                    const voteIndex = postStateValue.postVotes.findIndex( vote => vote.id === existingVote.id)
                    updatedPostVotes[voteIndex] = {
                        ...existingVote,
                        voteValue:  vote,
                    }

                    // update an existing postVote doc
                    batch.update(postVoteRef, {
                        voteValue: vote,
                    })

                    voteChange = 2 * vote
    
                }
            }

            //update state with updated values
            const postIndex = postStateValue.posts.findIndex(item => item.id === post.id)
            updatedPosts[postIndex] = updatedPost
            setPostStateValue(prev => ({
                ...prev,
                posts: updatedPosts,
                postVotes: updatedPostVotes,
            }))

            if(postStateValue.selectedPost){
                setPostStateValue(prev => ({
                    ...prev,
                    selectedPost: updatedPost,
                }))
            }

            // update post doc
            const postRef = doc(firestore, 'posts', post.id!)
            batch.update(postRef,{voteStatus: voteStatus + voteChange})

            await batch.commit()
        } catch (error: any) {
            console.log('onVote error: ', error)
            // setVoteError(error.message)
        }
        // setVoteLoading(false)
    }

    const onSelectPost = (post: Post) => {
        setPostStateValue(prev => ({
            ...prev,
            selectedPost: post,
        }))
        router.push(`/r/${post.communityId}/comments/${post.id}`)
    }

    const onDeletePost = async (post: Post): Promise<boolean> => {
        try {
            // image on storage? if yes, delete
            if(post.imageURL){
                const imageRef = ref(storage, `posts/${post.id}/image`)
                await deleteObject(imageRef)
            }

            // delete post
            const postDocRef = doc(firestore, 'posts', post.id!)
            await deleteDoc(postDocRef)

            //update recoil state
            setPostStateValue(prev => ({
                ...prev,
                posts: prev.posts.filter(item => item.id !== post.id)
            }))

            return true
        } catch (error) {
            return false
        }
    }

    const getCommunityPostVotes = async (communityId: string) => {
        const postVotesQuery = query(collection(firestore, 'users', `${user?.uid}/postVotes`),
            where('communityId','==',communityId)
        )
        const postVoteDocs = await getDocs(postVotesQuery)
        const postVotes = postVoteDocs.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        setPostStateValue(prev => ({
            ...prev,
            postVotes: postVotes as PostVote[],
        }))
    }

    useEffect(() => {
        if(!user || !currentCommunity?.id) return
        getCommunityPostVotes(currentCommunity?.id)
    }, [user, currentCommunity])

    useEffect(() => {
        if(!user){ //clear user post votes
            setPostStateValue(prev => ({
                ...prev,
                postVotes: [],
            }))
        }
    }, [user])

    return{
        postStateValue,
        setPostStateValue,
        onVote,
        onSelectPost,
        onDeletePost
    }
}
export default usePosts;