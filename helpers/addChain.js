import detectEthereumProvider from '@metamask/detect-provider'
import { configChainIdHex } from '../config/config'


export const addMultiVac = async () => {


  const provider = await detectEthereumProvider({
    mustBeMetaMask: true
  })
  if (provider) {
    try {
      await provider.request({ method: 'eth_requestAccounts'})
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: configChainIdHex,
          chainName: 'Polygon Mainnet',
          nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
           },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/']
        }]
      })
    } catch(e) {
      console.error(e);
    }  
  } else {
    console.error('Please install MetaMask');
  }

  return true
}