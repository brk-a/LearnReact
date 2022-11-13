import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

    const handleClickFilter = () => (
        setSearchFilters((prevFilters: any) => !prevFilters)
    )

    return(
        <Box>
            <Flex
                cursor={`pointer`}
                bg='gray.100'
                borderBottom={`1px`}
                borderColor='gray.200'
                p={`2`}
                fontWeight='black'
                fontSize={`large`}
                justifyContent='center'
                alignItems={`center`}
                onClick={handleClickFilter}>
                    <Text></Text>
                    <Icon paddingLeft={`2`} w='7' as={BsFilter}/>
            </Flex>
            {searchFilters && <SearchFilters/>}
        </Box>
    )
}

export default Search