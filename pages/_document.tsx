import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <link
          rel='preload'
          href='/fonts/ibm-plex-sans-var.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        /> */}
        <link href='/images/ch.png' rel='shortcut icon' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        {/* <link
          rel='preconnect'
          href='https://cdn.usefathom.com'
          crossOrigin=''
        /> */}
  
        <link
          color='#4a9885'
          href='/images/primebtn.png'
          rel='mask-icon'
        />
        <meta
          name='theme-color'
          content='#ffffff'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='#060606'
          media='(prefers-color-scheme: dark)'
        />
        <meta
          content='/static/favicons/browserconfig.xml'
          name='msapplication-config'
        />{' '}
  
              
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
