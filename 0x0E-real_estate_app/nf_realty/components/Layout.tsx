import React from 'react'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'

const Layout = ({children}:any) => {
  return (
    <>
      <Head>
        <title>NF Realty</title>
      </Head>
      <Box maxWidth={`1280`} m='auto'>
        <header>Navbar</header>

        <main>
          {children}
        </main>
        
        <footer>Footer</footer>
      </Box>
    </>
  )
}

export default Layout