import useDirectory from '@/hooks/useDirectory';
import { Flex, Icon, Image, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type MenuListItemProps = {
    displayText: string
    link: string
    icon: IconType
    iconColour: string
    imageURL?: string
};

const MenuListItem:React.FC<MenuListItemProps> = ({
    displayText,
    link,
    icon,
    iconColour,
    imageURL
}) => {
    const {onSelectMenuItem} = useDirectory()
    
    return(
        <MenuItem width='100%'
        fontSize='10pt'
        _hover={{bg: 'gray.100'}}
        onClick={() => onSelectMenuItem({
            displayText,
            link,
            icon,
            iconColour,
            imageURL
        })}>
            <Flex align='center'>
                {!imageURL ? ( // too lazy to swap icon and image hence !imageURL
                    <Icon as={icon} fontSize={20} mr={2} color={iconColour}/>
                ) : (
                    <Image src={imageURL} borderRadius='full' boxSize='18px' mr={2}/>
                )}
                {displayText}
            </Flex>
        </MenuItem>
    )
}
export default MenuListItem;