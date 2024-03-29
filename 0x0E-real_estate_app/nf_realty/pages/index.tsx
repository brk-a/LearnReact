import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
import Property from '../components/Property'

import {baseUrl, fetchApi} from '../utils/fetchApi'

const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}:any) => (
  <Flex flexWrap={`wrap`} justifyContent='center' alignItems={`center`} m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner'/>

    <Box p={`5`}>
      <Text color={`gray.500`} fontSize={`sm`} fontWeight={`medium`}>
        {purpose}
      </Text>
      <Text fontSize={`3xl`} fontWeight={`bold`}>
        {title1}<br/>{title2}
      </Text>
      <Text fontSize={`lg`} paddingTop={`3`} paddingBottom={`3`} color={`gray.700`}>
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize={`xl`} bg={`blue.300`} color={`white`}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}:any) {
  return (
    <Box>
      <h1>NF Realty</h1>

      <Banner
        purpose={`Rent a Home`}
        title1={`Everyone gets a`}
        title2={`Home`}
        desc1={`Explore apartments, villas, penthouses`}
        desc2={`and more`}
        buttonText={`Explore`}
        linkName={`/search?purpose=for-rent`}
        imageUrl={`https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4`}
      />

     <Flex flexWrap={`wrap`}>
        {propertiesForRent.map((property:any) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </Flex>

      <Banner
        purpose={`Buy a Home`}
        title1={`Find, buy and own your`}
        title2={`Dream Home`}
        desc1={`Explore apartments, villas, penthouses`}
        desc2={`and more`}
        buttonText={`Find`}
        linkName={`/search?purpose=for-sale`}
        imageUrl={`https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008`}
      />

      <Flex flexWrap={`wrap`}>
        {propertiesForSale.map((property:any) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  
  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    }
  }
}