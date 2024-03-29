import { Community } from '@/atoms/communitiesAtom';
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaReddit } from 'react-icons/fa';
import useCommunityData from '@/hooks/useCommunityData';

type HeaderProps = {
    communityData: Community
};

const Header:React.FC<HeaderProps> = ({communityData}) => {
    const {communityStateValue, onJoinOrLeaveCommunity, loading} = useCommunityData()
    const isJoined = !!communityStateValue.mySnippets.find(item => 
        item.communityId === communityData.id
        )
    
    return(
        <Flex direction='column' width='100%' height='146px'>
            <Box height='50%' bg='blue.400'/>
            <Flex justify='center' bg='white' flexGrow={1}>
                <Flex width='95%' maxWidth='860px'>
                    {communityStateValue.currentCommunity?.imageURL ? (
                        <Image src={communityStateValue.currentCommunity.imageURL}
                        alt='F Njakai'
                        borderRadius='full'
                        boxSize='66px'
                        position='relative'
                        top={-3}
                        color='blue/500'
                        border='4px solid white'/>
                    ) : (
                        <Icon as={FaReddit}
                        fontSize={64}
                        position='relative'
                        top={-3}
                        color='blue.500'
                        border='4px solid white'
                        borderRadius='50%'/>
                    )}
                    <Flex padding='10px 16px'>
                        <Flex direction='column' mr={6}>
                            <Text fontSize='16pt' fontWeight={800}>
                                {communityData.id}
                            </Text>
                            <Text fontSize='10pt' fontWeight={600} color='gray.400'>
                                r/{communityData.id}
                            </Text>
                        </Flex>
                        <Button onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
                        isLoading={loading}
                        variant={isJoined ? 'outline': 'solid'}
                        height='30px'
                        pr={6}
                        pl={6}>
                            {isJoined ? 'Joined' : 'Join'}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Header;