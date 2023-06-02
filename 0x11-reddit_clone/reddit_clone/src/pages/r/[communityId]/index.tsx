import { Community, communityState } from '@/atoms/communitiesAtom';
import About from '@/components/Community/About';
import CreatePostLink from '@/components/Community/CreatePostLink';
import Header from '@/components/Community/Header';
import NotFound from '@/components/Community/NotFound';
import PageContent from '@/components/Layout/PageContent';
import Posts from '@/components/Posts/Posts';
import { firestore } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import safeJSONstringify from 'safe-json-stringify';

type communityPageProps = {
    communityData: Community
};

const CommunityPage:React.FC<communityPageProps> = ({communityData}) => {
    const setCommunityStateValue = useSetRecoilState(communityState)

    useEffect(() => {
        setCommunityStateValue(prev => ({
            ...prev,
            currentCommunity: communityData,
        }))
    }, [communityData])

    if(!communityData){
        return(
            <NotFound/>
        )
    }

    return(
        <>
        <Header communityData={communityData}/>
        <PageContent>
            <>
            <CreatePostLink/>
            <Posts communityData={communityData}/>
            </>
            <>
            <About communityData={communityData}/>
            </>
        </PageContent>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
      try {
        const communityDocRef = doc(firestore, 'communities', context.query.communityId as string)
        const communityDoc = await getDoc(communityDocRef)

        return {
            props: {
                communityData: communityDoc.exists() ?
                    (JSON.parse(safeJSONstringify({
                        id: communityDoc.id,
                        ...communityDoc.data(),
                    }))
                ) : (
                    ""
                ),
            },
        }
      } catch (error) {
        console.log('getServerSideProps error: ', error)
        //add error page here
      }
  }
  

export default CommunityPage;