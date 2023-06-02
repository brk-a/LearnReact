import { authModalState } from '@/atoms/authModalAtom';
import { auth, firestore } from '@/firebase/clientApp';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const SignUp:React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [formError, setFormError] = useState('')

    const [
        createUserWithEmailAndPassword,
        userCred,
        loading,
        userError,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    //firebase logic
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        formError ? setFormError('') : {/**pass */}

        if (signUpForm.password !== signUpForm.confirmPassword){
            setFormError('Passwords do not match')
            return
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
    }

    const createUserDocument = async (user: User) => {
        await addDoc(collection(firestore, "users"), JSON.parse(JSON.stringify(user)))
    }

    useEffect(() => {
        if(userCred){
            createUserDocument(userCred.user)
        }  
    },[userCred])

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
            <Input required
            name='confirmPassword'
            placeholder='confirm password'
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
            <Text textAlign='center' color='red' fontSize='10pt'>
                {formError || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Button type='submit' width='100%' height='36px' mt={2} mb={2} isLoading={loading}>
                Sign Up
            </Button>
            <Flex fontSize='9pt' justifyContent='center'>
                <Text mr={1}>Already a rebbitor?</Text>
                <Text color='blue.500'
                fontWeight={700}
                cursor='pointer'
                onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: 'login',
                }))}>
                    Log In
                </Text>
            </Flex>
        </form>
    )
}
export default SignUp;