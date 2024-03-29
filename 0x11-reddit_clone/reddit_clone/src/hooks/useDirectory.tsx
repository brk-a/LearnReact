import { Community, communityState } from '@/atoms/communitiesAtom';
import { DirectoryMenuItem, directoryMenuState } from '@/atoms/directoryMenuAtom';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FaReddit } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';

const useDirectory = () => {
    const [directoryState, setDirectoryState] = useRecoilState(directoryMenuState)
    const router = useRouter()
    const communityStateValue = useRecoilValue(communityState)

    const toggleMenuOpen = () => {
        setDirectoryState(prev => ({
            ...prev,
            isOpen: !directoryState.isOpen,
        }))
    }
    
    const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
        setDirectoryState(prev => ({
            ...prev,
            selectedMenuItem: menuItem,
        }))
        router.push(menuItem.link)
        if(directoryState.isOpen){
            toggleMenuOpen()
        }
    }

    useEffect(() => {
        const {currentCommunity} = communityStateValue
        if(currentCommunity){
            setDirectoryState(prev => ({
                ...prev,
                selectedMenuItem: {
                    displayText: `r/${currentCommunity.id}`,
                    link: `/r/${currentCommunity.id}`,
                    icon: FaReddit,
                    iconColour: 'blue.500',
                    imageURL: currentCommunity.imageURL,
                },
            }))
        }
    }, [communityStateValue.currentCommunity])

    return({
        directoryState,
        toggleMenuOpen,
        onSelectMenuItem,
    })
}
export default useDirectory;