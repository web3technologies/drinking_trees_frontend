import  NavigationContainer from '../containers/navbar'
import FooterContainer from '../containers/footer'
import GlobalStyle from '../global-styles'
import Head from 'next/head';
import useConnection from '../hooks/useconnection'
import AdminContainer from '../containers/admin';
import {UserContext} from '../context/user';

function MyApp({ Component, pageProps }) {

  const { user, chain, hasMetaMask, loadingUser, loadUser, switchNetwork} = useConnection()

  if(process.env.NEXT_PUBLIC_ENVIRONMENT === "staging"){
    if (!user.isAdminUser){
      return (
        <AdminContainer
          chain={chain} 
          loadUser={loadUser}
          switchNetwork={switchNetwork}
          loadingUser={loadingUser}
      />
      ) 
      
      
    }
  }
  
  return (
    <>
      <Head>
          <title>Drinking Trees</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="https://gateway.pinata.cloud/ipfs/QmQBHrUk5ev9gvsHHk3ToMSixBWMhTvTZ6NpRK1ueSUdxB"/>
      </Head>
      <GlobalStyle/>
      <UserContext.Provider value={{user, chain, hasMetaMask, loadingUser, loadUser, switchNetwork}}>
        <NavigationContainer/>
        <Component {...pageProps} />
        <FooterContainer/>
      </UserContext.Provider>
    </>
  )
}

export default MyApp
