import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { drinkingTreesTwo } from '../config'
import {baseUrl, baseUri } from '../config'

export default function useMyAssets(user, contract){

    const [ userAssets, setUserAssets ] = useState([])
    const [ listPrice, setListPrice ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{

        async function loadNFTs(){
            
            if(user.signer && contract.nftContract){
                const user_address = await user.signer.getAddress()
                let newData = await contract.nftContract.walletOfOwner(user_address)
            
                const intArr = []
                for (let i = 0; i<newData.length; i++){
                    intArr.push(BigNumber.from(newData[i]).toNumber())
                }
            
                const nftArr = []
                for (let i = 0; i<intArr.length; i++){
                    const nftId = intArr[i]
                    const nft = await axios.get(`${baseUrl}${baseUri}${nftId}.json`)
                    const img = nft.data.image.split("ipfs://")[1]
                    nft.data.image = `${baseUrl}${img}`
                    nft.data.id = nftId
                    nftArr.push(nft)
                }
                
                setUserAssets(nftArr)
                setLoading(false)
            }else{
                setLoading(true)
            }
            
        
        }
    
    if (user && contract){
        loadNFTs()
    }
    
    
    return ()=> setUserAssets([])
    
    },[user, contract])

    async function sellAsset(nft){

        if (!listPrice){return}
        else{
          const nftMarketCreate = await contract.marketContract.createMarketItem(
            drinkingTreesTwo, 
            nft.data.id, 
            ethers.utils.parseEther(listPrice)
            )
          setListPrice(null)
        }
        
      }
  
    function handlePriceChange(e){
        setListPrice(e.target.value)
    }

    return { userAssets, sellAsset, handlePriceChange, loading}
}
