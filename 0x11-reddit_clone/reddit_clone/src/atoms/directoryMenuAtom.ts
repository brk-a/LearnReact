import { IconType } from "react-icons";
import { TiHome } from "react-icons/ti";
import { atom } from "recoil";

export type DirectoryMenuItem = {
    icon: IconType
    displayText: string
    link: string
    iconColour: string
    imageURL?: string
}

interface DirectoryMenuState{
    isOpen: boolean
    selectedMenuItem: DirectoryMenuItem
}

export const defaultDirectoryMenuItem: DirectoryMenuItem = {
    icon: TiHome,
    displayText: 'Home',
    link: '/',
    iconColour: 'black',
}

export const defaultDirectoryMenuState: DirectoryMenuState = {
    isOpen: false,
    selectedMenuItem: defaultDirectoryMenuItem,
}

export const directoryMenuState = atom<DirectoryMenuState>({
    key: 'directoryMenuState',
    default: defaultDirectoryMenuState,
})