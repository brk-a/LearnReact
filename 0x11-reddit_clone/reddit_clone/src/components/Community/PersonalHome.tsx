import { Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaReddit } from 'react-icons/fa';

const PersonalHome:React.FC = () => {
    const router = useRouter()

    return (
        <Flex direction='column'
        bg='white'
        borderRadius={4}
        cursor='pointer'
        border='1px solid'
        borderColor='gray.300'
        position='sticky'>
            <Flex align='flex-end'
            color='white'
            p='6px 10px'
            bg='blue.500'
            height='34px'
            borderRadius='0px 0px 4px 4px'
            fontWeight={600}
            bgImage="url(/images/redditPersonalHome.png)"
            backgroundSize='cover'></Flex>
            <Flex direction='column' p='12px'>
                <Flex align='center' mb={2}>
                    <Icon as={FaReddit}
                    fontSize={50}
                    color='brand.100'
                    mr={2}/>
                    <Text fontWeight={600}>Home</Text>
                </Flex>
                <Stack spacing={3}>
                    <Text fontSize='9pt'>
                        Your personal Reddit front page, built for you
                    </Text>
                    <Button height='30px'
                    onClick={() => {
                        alert('Working to bring you this feature soon; sorry.')
                    }}>
                        Create Post
                    </Button>
                    <Button height='30px'
                    variant='outline'
                    onClick={() => {
                        alert('Working to bring you this feature soon; sorry.')
                    }}>
                        Create Community
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    )
}
export default PersonalHome;