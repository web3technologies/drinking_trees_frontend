import detectEthereumProvider from '@metamask/detect-provider'

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
          chainId: '0xf49d',
          chainName: 'MultiVac Mainnet',
          nativeCurrency: {
            name: 'Multivac',
            symbol: 'MTV',
            decimals: 18
           },
          rpcUrls: ['https://rpc.mtv.ac'],
          blockExplorerUrls: ['https://e.mtv.ac/']
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