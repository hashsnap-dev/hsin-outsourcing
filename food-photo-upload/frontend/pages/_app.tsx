import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import ky from 'ky'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <SWRConfig value={{
      fetcher: (res, init) => ky.get(res, init).json(),
    }}>
    <Component {...pageProps} />
    </SWRConfig>
  </ChakraProvider>
}
export default MyApp
