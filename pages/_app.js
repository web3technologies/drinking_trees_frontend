import  NavigationContainer from '../containers/navbar'
import FooterContainer from '../containers/footer'
import GlobalStyle from '../global-styles'
import Head from 'next/head';
import useConnection from '../hooks/useconnection'


function MyApp({ Component, pageProps }) {

  const { user, chain, contract, loadUser, switchNetwork} = useConnection()

  return (
    <>

      <Head>
          <title>Home App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle/>
      <NavigationContainer loadUser={loadUser} user={user} chain={chain} switchNetwork={switchNetwork}/>
      <Component {...pageProps} />
      <FooterContainer/>
    </>
  )
}

export default MyApp
