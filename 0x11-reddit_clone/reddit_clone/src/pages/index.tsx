import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageContent from '@/components/Layout/PageContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/clientApp'
import { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import usePosts from '@/hooks/usePosts'
import { Post, PostVote } from '@/atoms/postsAtom'
import PostLoader from '@/components/Posts/PostLoader'
import { Stack } from '@chakra-ui/react'
import PostItem from '@/components/Posts/PostItem'
import CreatePostLink from '@/components/Community/CreatePostLink'
import useCommunityData from '@/hooks/useCommunityData'
import Recommendations from '@/components/Community/Recommendations'
import Premium from '@/components/Community/Premium'
import PersonalHome from '@/components/Community/PersonalHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, loadingUser] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const {communityStateValue} = useCommunityData()
  const {
    postStateValue,
    setPostStateValue,
    onDeletePost,
    onSelectPost,
    onVote
  } = usePosts()
  // const {} =

  const buildUserHomeFeed = async () => {
    setLoading(true)
    try {
      if(communityStateValue.mySnippets.length){
        //get posts from users' communities
        const myCommunityIds = communityStateValue.mySnippets.map(
            snippet => snippet.communityId
          )
          const postQuery = query(
            collection(firestore, 'posts'),
            where('communityId', 'in', myCommunityIds),
            limit(10)
          )
          const postDocs = await getDocs(postQuery)
          const posts = postDocs.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          setPostStateValue(prev => ({
            ...prev,
            posts: posts as Post[],
          }))
      } else {
        buildNoUserHomeFeed()
      }
    } catch (error: any) {
      console.log('buildUserHomeFeed error: ', error)
    }
    setLoading(false)
  }

  const buildNoUserHomeFeed = async () => {
    setLoading(true)
    try {
      const postQuery = query(
        collection(firestore, 'posts'),
        // where(), //no need for this because `voteStatus` is the filter
        orderBy('voteStatus', 'desc'),
        limit(10)
      )
      const postDocs = await getDocs(postQuery)
      const posts = postDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPostStateValue(prev => ({
        ...prev,
        posts: posts as Post[],
      }))
    } catch (error: any) {
      console.log('buildNoUserHomeFeed error: ', error)
    }
    setLoading(false)
  }

  const getUserPostVotes = async () => {
    setLoading(true)
    try {
      const postIds = postStateValue.posts.map(
        post => post.id
      )
      const postVotesQuery = query(
        collection(firestore, `users/${user?.uid}/postVotes`),
        where('postId', 'in', postIds)
      ) 
      const postVotesDocs = await getDocs(postVotesQuery)
      const postVotes = postVotesDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPostStateValue(prev => ({
        ...prev,
        postVotes: postVotes as PostVote[],
      }))

    } catch (error: any) {
      console.log('getUserPostVotes error: ', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if(communityStateValue.snippetsFetched) buildUserHomeFeed()
  }, [communityStateValue.snippetsFetched])

  useEffect(() => {
    if(!user && !loadingUser) buildNoUserHomeFeed()
  }, [user, loadingUser])

  useEffect(() => {
    if(user && postStateValue.posts.length) getUserPostVotes()

    return () => {
      setPostStateValue(prev => ({
        ...prev,
        postVotes: [],
      }))
    }
  }, [user, postStateValue.posts])

  return (
    <PageContent>
      <>
      <CreatePostLink/>
      {loading ? (
        <PostLoader/>
      ) : (
        <Stack>
          {postStateValue.posts.map((post, i) => (
            <PostItem key={i}
            post={post}
            onDeletePost={onDeletePost}
            onSelectPost={onSelectPost}
            onVote={onVote}
            userVoteValue={
              postStateValue.postVotes
                .find(item => item.postId === post.id)?.voteValue
            }
            userIsCreator={user?.uid === post.id}
            homePage/>
          ))}
        </Stack>
      )}
      </>
      <>
      <Stack spacing={6}>
        <Recommendations/>
        <Premium/>
        <PersonalHome/>
      </Stack>
      </>
    </PageContent>
  )
}
