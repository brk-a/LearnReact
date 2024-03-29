import React from 'react'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}:any) => {
  return (
    <>
      <Head>
        <title>NF Realty</title>
      </Head>
      <Box maxWidth={`1280`} m='auto'>
        <Navbar/>

        <main>
          {children}
        </main>
        
        <footer>
          <Footer/>
        </footer>
      </Box>
    </>
  )
}

export default Layout