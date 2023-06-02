import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community{
    id: string;
    creatorId: string;
    numberOfMembers: number;
    privacyType: 'public' | 'restricted' | 'private';
    createdAt?: Timestamp;
    imageURL?: string;
}

export interface CommunitySnippet{
    communityId: string;
    isModerator?: boolean;
    imageURL?: string;
}

interface Communitystate{
    mySnippets: CommunitySnippet[];
    currentCommunity?: Community;
    snippetsFetched?: boolean
    // visitedCommunities?:

}

const defaultCommunitiesState: Communitystate = {
    mySnippets: [],
    snippetsFetched: false,
}

export const communityState = atom<Communitystate>({
    key: 'communitiesState',
    default: defaultCommunitiesState, 
})