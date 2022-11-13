import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from '../assets/images/noresult.png'

const Search = ({properties}: any) => {
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
                    <Text>Search</Text>
                    <Icon paddingLeft={`2`} w='7' as={BsFilter}/>
            </Flex>
            {searchFilters && <SearchFilters/>}
            <Text fontSize={`2xl`} p='4' fontWeight={`bold`}>
                Properties
                {router.query.purpose}
            </Text>
            <Flex flexWrap={`wrap`}>
                {properties.map((property: any) => (
                    <Property key={property.id} property={property}></Property>
                ))}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent={`center`} alignItems={`center`} flexDirection='column' marginTop={`5`} marginBottom={`5`}>
                    <Image alt="no result" src={noresult}/>
                    <Text fontSize={`2xl`} marginTop='3'>No Results Found</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search

export async function getStaticProps() {
    const purpose = {}

    return {
      props: {
        propertiesForSale: purpose,
      }
    }
  }