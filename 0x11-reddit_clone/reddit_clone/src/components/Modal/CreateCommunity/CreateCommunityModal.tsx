import { auth, firestore } from '@/firebase/clientApp';
import useDirectory from '@/hooks/useDirectory';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Box, Divider, Input, Checkbox, Stack, Flex, Icon } from '@chakra-ui/react';
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {BsFillEyeFill, BsFillPersonFill} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'

type CreateCommunityModalProps = {
    open: boolean,
    handleClose: () => void,
};

const CreateCommunityModal:React.FC<CreateCommunityModalProps> = ({open, handleClose}) => {
    const [communityName, setCommunityName] = useState("")
    const [charsRemaining, setCharsRemaining] = useState(21)
    const [communityType, setCommunityType] = useState('public')
    const [firestoreError, setFirestoreError] = useState('')
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)
    const router = useRouter()
    const  {toggleMenuOpen} = useDirectory()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      if(e.target.value.length > 21) return

      setCommunityName(e.target.value)
      setCharsRemaining(21 - e.target.value.length)
    }

    const handleCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCommunityType(e.target.name)
    }

    const handleCreateCommunity =async () => {
      if(firestoreError) setFirestoreError('')

      const format = /\W+/
      if(format.test(communityName) || communityName.length < 3){
        setFirestoreError('Community names must be between 3 - 21 characters long and\
        can only contain letters,numbers or underscores.')
        return
      }

      setLoading(true)

      try {
        const communityDocRef = doc(firestore, 'communities', communityName)
        //check if community exists in db
        await runTransaction(firestore, async (transaction) => {
          const communityDoc = await transaction.get(communityDocRef)

          if(communityDoc.exists()){
            throw new Error(`Sorry, r/${communityName} is taken. Try another.`)
          }

          //create community
          transaction.set(communityDocRef, {
            "creatorId": user!.uid,
            "createdAt": serverTimestamp(),
            "numberOfMembers": 1,
            "privacyType": communityType,
          })

          //create community snippet on user
           transaction.set(doc(firestore, `users/${user!.uid}/communitySnippets`, communityName), {
            // ...user, //should I spread this? NO. NO. NO.
            communityId: communityName, 
            isModerator: true,
           })
        })

        handleClose()
        toggleMenuOpen()
        router.push(`/r/${communityName}`)
      } catch (error: any) {
        console.log('handleCreateCommunity: ', error)
        setFirestoreError(error.message)       
      }

      setLoading(false) 
    }

    return (
        <>
          <Modal isOpen={open} onClose={handleClose} size='lg'>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader display='flex'
              flexDirection='column'
              padding={3}
              fontSize={15}>
                Create a community
              </ModalHeader>
                <Box pl={3} pr={3}>
                  <Divider/>
                  <ModalCloseButton />
                  <ModalBody display='flex'
                  flexDirection='column'
                  padding='10px 0px'>
                    <Text fontWeight={600} fontSize={15}>Name</Text>
                    <Text fontSize={11} color='gray.500'>
                      Community names including capitalisation cannot be changed
                    </Text>
                    <Text position='relative'
                    top='28px'
                    left='10px'
                    width='20px'
                    color='gray.400'>
                      r/
                    </Text>
                    <Input value={communityName}
                    position='relative'
                    size='sm'
                    pl='22px'
                    onChange={handleChange}/>
                    <Text color={charsRemaining === 0 ? 'red' : 'gray.500'}
                    fontSize='9pt'>
                      {charsRemaining} characters remaining
                    </Text>
                    <Text fontSize='9pt' color='red' pt={1}>{firestoreError}</Text>
                    <Box mt={4} mb={4}>
                      <Text fontWeight={600} fontSize={15}>Community type</Text>
                      <Stack>
                        <Checkbox name='public'
                        isChecked={communityType === 'public'}
                        onChange={handleCommunityTypeChange}>
                          <Flex align='center'>
                            <Icon as={BsFillPersonFill} color='gray.500' mr={2}/>
                           <Text fontSize='10pt' mr={1}>Public</Text>
                           <Text fontSize='8pt' color='gray.500' pt={1}>
                            Anyone can view, comment or post in this community
                          </Text>
                          </Flex>
                        </Checkbox>
                        <Checkbox name='restricted'
                        isChecked={communityType === 'restricted'}
                        onChange={handleCommunityTypeChange}>
                          <Flex align='center'>
                            <Icon as={BsFillEyeFill} color='gray.500' mr={2}/>
                            <Text fontSize='10pt' mr={1}>Restricted</Text>
                            <Text fontSize='8pt' color='gray.500' pt={1}>
                              Anyone can view this community; only approved users can post
                            </Text>
                          </Flex>
                        </Checkbox>
                        <Checkbox name='private'
                        isChecked={communityType === 'private'}
                        onChange={handleCommunityTypeChange}>
                          <Flex align='center'>
                            <Icon as={HiLockClosed} color='gray.500' mr={2}/>
                            <Text fontSize='10pt' mr={1}>Private</Text>
                            <Text fontSize='8pt' color='gray.500' pt={1}>
                              Only approved users can view and submit to this community
                            </Text>
                          </Flex>
                        </Checkbox>
                      </Stack>
                    </Box>
                  </ModalBody>
                </Box>    
              <ModalFooter bg='gray.100'
              borderRadius='0px 0px 10px 10px'>
                <Button variant='outline'
                mr={3}
                height='30px'
                onClick={handleClose}>
                  Cancel
                </Button>
                <Button height='30px'
                onClick={handleCreateCommunity}
                isLoading={loading}>
                  Create Community
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
export default CreateCommunityModal;