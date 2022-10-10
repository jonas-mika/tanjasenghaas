import '@fontsource/montserrat'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import theme from '@/lib/theme'

function App({ Component, pageProps }: AppProps) {
  console.log("[APP]: ", theme)
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
