import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        userError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    //firebase logic
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(loginForm.email, loginForm.password)
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <Input required
            name='email'
            placeholder='email'
            type='email'
            mb={2}
            bg='gray.50'
            fontSize='10pt'
            _placeholder={{color: 'gray.500'}}
            _hover={{
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
            }}
            _focus={{
                outline: 'none',
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
            }}
            onChange={handleChange}/>
            <Input required
            name='password'
            placeholder='password'
            type='password'
            mb={2}
            bg='gray.50'
            fontSize='10pt'
            _placeholder={{color: 'gray.500'}}
            _hover={{
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
            }}
            _focus={{
                outline: 'none',
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
            }}
            onChange={handleChange}/>
            {userError &&
                <Text textAlign='center' color='red' fontSize='10pt'>
                    {FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]}
                </Text>
            }
            <Button type='submit' width='100%' height='36px' mt={2} mb={2} isLoading={loading}>
                Log In
            </Button>
            <Flex justifyContent='center' mb={2}>
                <Text fontSize='9pt' mr={1}>Forgot your password?</Text>
                <Text fontSize='9pt'
                color='blue.500'
                cursor='pointer'
                onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: 'resetPassword',
                }))}>
                    Reset        
                </Text>
            </Flex>
            <Flex fontSize='9pt' justifyContent='center'>
                <Text mr={1}>New here?</Text>
                <Text color='blue.500'
                fontWeight={700}
                cursor='pointer'
                onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: 'signup',
                }))}>
                    Sign Up
                </Text>
            </Flex>
        </form>
    )
}
export default Login;