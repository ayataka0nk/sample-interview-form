import { ChakraProvider } from '@chakra-ui/provider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'
import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
)
