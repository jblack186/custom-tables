import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {Home} from '../components/Home';
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    
    <Home />
    
    </ChakraProvider>
}

export default MyApp
