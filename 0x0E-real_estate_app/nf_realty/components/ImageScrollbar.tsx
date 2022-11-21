import React from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import {Box, Icon,Flex} from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext)

    return (
        <Flex justifyContent={`center`} alignItems='center' marginRight={`1`}>
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize={`2xl`}
                cursor={`pointer`}
                // d={['none', 'none', 'none', 'block']}
            />
        </Flex>
    )
}

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Flex justifyContent={`center`} alignItems='center' marginLeft={`1`}>
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize={`2xl`}
                cursor={`pointer`}
                // d={['none', 'none', 'none', 'block']}
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}: any) => {
  return (
    <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        // style={{overflow: 'hidden'}}
    >
        {data.map((item: any) => (
            <Box key={item.id} w={`910px`} itemID={item.id} overflow='hidden' p='1'>
                <Image
                    placeholder='blur'
                    blurDataURL={item.url}
                    src={item.url}
                    alt='image unavailable'
                    width={1000}
                    height={500}
                    key={item.id}
                    sizes='(max-width:500px) 100px, (max-width:1024px) 400px, 100px'
                />
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar