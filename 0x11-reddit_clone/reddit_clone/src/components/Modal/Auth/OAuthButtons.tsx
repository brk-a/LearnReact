import { auth, firestore } from '@/firebase/clientApp';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const OAuthButtons:React.FC = () => {    
    const [
        signInWithGoogle,
        userCred,
        loading,
        userError,
      ] = useSignInWithGoogle(auth);

    const handleClick = () => {
        signInWithGoogle()
    }

    const createUserDocument = async (user: User) => {
        const userDocRef = doc(firestore, 'users', user.uid)
        await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
    }

    useEffect(() => {
        if(userCred){
            createUserDocument(userCred.user)
        }
    },[userCred])

    return(
        <Flex direction='column' width='100%' mb={4}>
            <Button variant='oauth' mb={2} type='submit' isLoading={loading} onClick={handleClick}>
                <Image src='/images/googlelogo.png' height='20px' mr={4}/>
                Continue with Google
            </Button>
            <Button variant='oauth' mb={2}>Some Other Provider</Button>
            <Button variant='oauth'>And Another</Button>
            {userError && <Text>{userError?.message}</Text>}
        </Flex>
    )
}
export default OAuthButtons;