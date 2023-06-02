import { Flex} from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';
import { User } from 'firebase/auth';
import Icons from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
    user?: User | null
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return(
        <>
            <AuthModal></AuthModal>
            <Flex justify='center' align='center'>
                {user ? (
                    <Icons/>
                    // <Button onClick={() => signOut(auth)}>Log out</Button>
                    ) : ( 
                    <AuthButtons/>
                )}
                <UserMenu user={user}/>
            </Flex>
        </>
    )
}
export default RightContent;