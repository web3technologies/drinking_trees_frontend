import  NavigationContainer from '../containers/navbar'
import GlobalStyle from '../global-styles'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>

        <Head>
            <title>Home App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
          </Head>
      <GlobalStyle/>
      <NavigationContainer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
