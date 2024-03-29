import React from 'react'
import { useEffect, useState } from 'react'
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button, filter} from '@chakra-ui/react'
import router, { useRouter } from 'next/router'
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'

import {filterData, getFilterValues} from '../utils/filterData'

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  
  const searchProperties = (filterValues: any) => {
    const path = router.pathname
    const {query} = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({pathname: path, query})
  }

  // const handleChangeFilter = (e: any, filter: any) => (
  //   searchProperties({[filter.queryName]: e.target.value})
  // )

  return (
    <Flex bg={`gray.100`} p='4' justifyContent={`center`} flexWrap='wrap'>
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({[filter.queryName]: e.target.value})} placeholder={filter.placeholder} w='fit-content' p='2'>
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters