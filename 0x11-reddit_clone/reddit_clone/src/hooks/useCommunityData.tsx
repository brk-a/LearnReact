import { authModalState } from '@/atoms/authModalAtom';
import { Community, CommunitySnippet, communityState } from '@/atoms/communitiesAtom';
import { auth, firestore } from '@/firebase/clientApp';
import { log } from 'console';
import { collection, doc, getDoc, getDocs, increment, writeBatch } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState, useSetRecoilState } from 'recoil';

const useCommunityData= () => {
    const [user, loadingUser] = useAuthState(auth)
    const router = useRouter()
    const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
    const setAuthModalState = useSetRecoilState(authModalState)
    const [loading, setLoading] = useState(false)
    const [fetchError, setFetchError] = useState('')

    const onJoinOrLeaveCommunity = (communityData: Community, isJoined: boolean) => {
        //is user signed in?
            //if not, open login modal
        if(!user){
            setAuthModalState({open: true, view: 'login'})
            return
        }
        
        if(isJoined){
            leaveCommunity(communityData.id)
            return
        }
        joinCommunity(communityData)
    }

    const joinCommunity = async (communityData: Community) => {
        //create a community snippet
        //update #members
        try {
            const batch = writeBatch(firestore)
            const newSnippet: CommunitySnippet = {
                communityId: communityData.id,
                imageURL: communityData.imageURL || "",
                isModerator: user?.uid === communityData.creatorId,
            }

            batch.set(doc(firestore, `users/${user?.uid}/communitySnippets`, communityData.id), newSnippet)
            batch.update(doc(firestore, 'communities', communityData.id), {
                numberOfMembers: increment(1),
            })
            await batch.commit()

            //update recoil state
            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet],
            }))
            
        } catch (error: any) {
            console.log('joinCommunity error: ', error.message)
            setFetchError(error.message)
        }

        setLoading(false)
    }

    const leaveCommunity = async (communityId: string) => {
        //delete community snippet
        //less 1 from #members
        try {
            const batch = writeBatch(firestore)
            batch.delete(doc(firestore, `users/${user?.uid}/communitySnippets`, communityId))
            batch.update(doc(firestore, 'communities', communityId), {
                numberOfMembers: increment(-1),
            })
            await batch.commit()

        //update recoil state
        setCommunityStateValue(prev => ({
            ...prev,
            mySnippets: prev.mySnippets.filter(item => item.communityId !== communityId),
        }))
        } catch (error: any) {
            console.log('leaveCommunity error: ', error)
            setFetchError(error.message)
        }

        setLoading(false)
    }

    const getMySnippets = async () => {
        setLoading(true)
        try {
            const snippetDocs = await getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`))
            const snippets = snippetDocs.docs.map(doc => ({ ...doc.data()} ))
            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: snippets as Array<CommunitySnippet>, //CommunitySnippet[] works too
                snippetsFetched: true, 
            }))
        } catch (error: any) {
            console.log('getMySnippets error: ', error)
            setFetchError(error.message)
        }
        setLoading(false)
    }

    const getCommunityData = async (communityId: string) => {
        try {
            const communityDocRef = doc(firestore, "communities", communityId)
            const communityDoc = await getDoc(communityDocRef)
            setCommunityStateValue(prev => ({
                ...prev,
                currentCommunity: {id: communityDoc.id,...communityDoc.data()} as Community,
            })) 
        } catch (error: any) {
            console.log('getCommunityData error: ', error)
            // setGetCommunityError(error.message)
        }
    }

    useEffect(() => {
        if (!user){
            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: [],
                snippetsFetched: false,
            }))
            return
        }

        getMySnippets()
    },[user])

    useEffect(() => {
        const {communityId} = router.query
        if(communityId && !communityStateValue.currentCommunity){
            getCommunityData(communityId as string)
        }
    }, [router.query, communityStateValue.currentCommunity])
     
    return{
        communityStateValue,
        onJoinOrLeaveCommunity,
        loading,
    }
}
export default useCommunityData;