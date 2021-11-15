import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from 'themes/default'
import { SWRConfig } from 'swr'
import fetcher from 'infra/fetcher'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
            <SWRConfig value={fetcher}>
              <Component {...pageProps} />
            </SWRConfig> 
         </ThemeProvider> 

}
export default MyApp
