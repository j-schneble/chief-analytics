import '../styles/globals.css'
import '../styles/one.css'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout/index'
import { Providers } from '../components/Providers/index'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (
    page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  ) => (
    <ThemeProvider disableTransitionOnChange attribute='class'>
      <SessionProvider session={pageProps.session}>
      <Providers pageProps={pageProps}>
        <Layout>{page}</Layout>
      </Providers>
      </SessionProvider>
    </ThemeProvider>
  )

  return getLayout(<Component {...pageProps} />)
}

export default MyApp

