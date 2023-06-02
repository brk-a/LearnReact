import { Post, postState } from '@/atoms/postsAtom';
import { Box, Flex, Text, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import CommentInput from './CommentInput';
import { Timestamp, collection, doc, getDocs, increment, orderBy, query, serverTimestamp, where, writeBatch } from 'firebase/firestore';
import { firestore } from '@/firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import CommentItem, { Comment } from './CommentItem';

type CommentsProps = {
    user: User
    selectedPost: Post | null
    communityId: string
};

const Comments:React.FC<CommentsProps> = ({user, selectedPost, communityId}) => {
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState<Comment[]>([])
    const [fetchLoading, setFetchLoading] = useState(false)
    const [createLoading, setCreateLoading] = useState(false)
    const [loadingDeleteId, setLoadingDeleteId] = useState('')
    const setPostState = useSetRecoilState(postState)

    const onCreateComment = async () => {
        // create a comment document
        setCreateLoading(true)
        try {
            const batch = writeBatch(firestore)

            const commentDocRef = doc(collection(firestore, 'comments'))

            const newComment: Comment = {
                id: commentDocRef.id,
                creatorId: user.uid,
                creatorDisplayText: user.email!.split("@")[0],
                communityId,
                postId: selectedPost?.id!,
                postTitle: selectedPost?.title!,
                text: commentText,
                createdAt: serverTimestamp() as Timestamp
            }

            batch.set(commentDocRef, newComment)

            newComment.createdAt = {seconds: Date.now() / 1000} as Timestamp

            // update the #posts in the `posts` collection +1
            const postDocRef = doc(firestore, 'posts', selectedPost?.id!)
            batch.update(postDocRef, {
                numberOfComments: increment(1),
            })

            //write to db
            await batch.commit()

            //update client recoil state
            setCommentText('')
            setComments(prev => ([
                newComment,
                ...prev
            ]))
            setPostState(prev => ({
                ...prev,
                selectedPost: {
                    ...prev.selectedPost,
                    numberOfComments: prev.selectedPost?.numberOfComments! + 1
                } as Post,
            }))

        } catch (error: any) {
            console.log('onCreateComment error: ', error)
            // setOnCreateCommentError(error.message)
        }
        setCreateLoading(false)
    }

    const onDeleteComment = async (comment: Comment) => {
        setLoadingDeleteId(comment.id)
        try {
            const batch = writeBatch(firestore)
        // delete comment document
            const commentDocRef = doc(firestore, 'comments', comment?.id)
            batch.delete(commentDocRef)

        // update the #posts in the `posts` collection -1
        const postDocRef = doc(firestore, 'posts', selectedPost?.id!)
        batch.update(postDocRef, {
            numberOfComments: increment(-1)
        })

        await batch.commit()

        //update client recoil state
        setPostState(prev => ({
            ...prev,
            selectedPost: {
                ...prev.selectedPost,
                numberOfComments: prev.selectedPost?.numberOfComments! - 1,
            } as Post,
        }))
        setComments(prev => prev.filter(item => item.id != comment.id))

        } catch (error: any) {
            console.log('onDeleteComment error: ', error)
            //setOnDeleteError(error.message)
        }
        setLoadingDeleteId('')

    }

    const getPostComments = async () => {
        setFetchLoading(true)
        try {
            const commentsQuery = query(
                collection(firestore, 'comments'),
                where('postId', '==', selectedPost?.id),
                orderBy('createdAt', 'desc')
            )
            const commentDocs = await getDocs(commentsQuery)
            const comments = commentDocs.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setComments(comments as Comment[])
        } catch (error: any) {
            console.log('getPostComments error: ', error)
            //setGetPostCommentsError(error.message) 
        }
        setFetchLoading(false)
    }

    useEffect(() => {
        if(!selectedPost) return
        getPostComments()
    }, [selectedPost])
    
    return(
        <Box bg='white' borderRadius='0px 0px 4px 4px' p={2}>
            <Flex direction='column'
            pl={10}
            pr={4}
            mb={6}
            fontSize='10pt'
            width='100%'>
                {!fetchLoading && (
                    <CommentInput commentText={commentText}
                    setCommentText={setCommentText}
                    user={user}
                    createLoading={createLoading}
                    onCreateComment={onCreateComment}/>
                )}
            </Flex>
            <Stack spacing={6} p={2}>
                {fetchLoading ? (
                    <>
                    {[0, 1, 2].map((item, i) => (
                        <Box key={i} padding='6' bg='white'>
                            <SkeletonCircle size='10'/>
                            <SkeletonText mt='4' noOfLines={2} spacing={4}/>
                        </Box>
                    ))}
                    </>
                ) : (
                    <>
                    {comments.length === 0 ? (
                        <Flex direction='column'
                        justify='center'
                        align='center'
                        borderTop='1px solid'
                        borderColor='gray.100'
                        p={20}>
                            <Text fontWeight={700} opacity={0.3}>
                                No Comments, Yet
                            </Text>
                        </Flex>
                    ) : (
                        <>
                        {comments.map((comment,i) => (
                            <CommentItem key={i}
                            comment={comment}
                            onDeleteComment={onDeleteComment}
                            loadingDelete={loadingDeleteId === comment.id}
                            userId={user?.uid}/>
                        ))}                       
                        </>
                    )}
                    </>
                )}

            </Stack>
            <Flex></Flex>
        </Box>
    )
}
export default Comments;