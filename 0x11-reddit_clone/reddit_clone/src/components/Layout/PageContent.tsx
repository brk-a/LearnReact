import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    children: any
};

const PageContent:React.FC<PageContentProps> = ({children}) => {
    
    return(
        <Flex justify='center'
        bg='gray.400'
        padding='16px 0px'
        >
            <Flex width='95%' justify='center' maxWidth='860px'>
                <Flex direction='column'
                mr={{
                    base: 0,
                    md: 6,
                }}
                width={{
                    base: '100%',
                    md: '67%',
                }}>
                    {children && children[0 as keyof typeof children]}
                </Flex>
                <Flex direction='column'
                display={{
                    base: 'none',
                    md: 'flex',
                }}
                flexGrow={1}>
                    {children && children[1 as keyof typeof children]}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;