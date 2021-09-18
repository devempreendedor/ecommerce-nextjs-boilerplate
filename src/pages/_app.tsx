import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJs Boilerplate by Lucas Couto</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/static/favicon.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="A simple project starter" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
