import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
