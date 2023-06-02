import { authModalState } from '@/atoms/authModalAtom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import ResetPassword from './ResetPassword';

const AuthModal:React.FC = () => {
    
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, authError] = useAuthState(auth)
    
    useEffect(() => {
      user ? handleClose() : {/**pass */}
    }, [user])

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    return (
      <>
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign='center'>
                {modalState.view === 'login' && 'Log in'}
                {modalState.view === 'signup' && 'Sign up'}
                {modalState.view === 'resetPassword' && 'Reset password'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pb={6}>
                <Flex direction='column' align='center' justify='center' width='70%'>
                  { modalState.view === "login" || modalState.view === "signup" ? (
                    <>
                      <OAuthButtons/>
                      <Text color='gray.500' fontWeight={700}>OR</Text>
                      <AuthInputs/>
                    </>
                  ) : (
                    <ResetPassword toggleView={function (view: ModalView): void {
                      throw new Error('Function not implemented.');
                    } }/>
                  )}
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;