import { ethers } from 'ethers'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { drinkingTreesTwo } from '../config'
import { UserContext } from '../context/user';
import fetchContractData from '../apis/s3/fetchcontractdata'
import { pinataURL } from '../config/config'


export default function useMyTrees(){
    const {loadUser, user, chain, switchNetwork} = useContext(UserContext)
    const [ userAssets, setUserAssets ] = useState([])
    const [ listPrice, setListPrice ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{

        async function loadNFTs(){
            

            const nftData = await fetchContractData("contracts/DrinkingTrees.sol/DrinkingTrees.json")
            const nftAddress = await fetchContractData("contracts/address/DrinkingTrees.json")

            if(user.signer && nftData){
                const contract = new ethers.Contract(nftAddress.address, nftData.abi, user.signer)
                const userAddress = await user.signer.getAddress()
            
                const nfts = await contract.walletOfOwner(userAddress)
                console.log(nfts)
                const nftArr = []

                for (let i = 0; i<nfts.length; i++){
                    let uri = await contract.tokenURI(nfts[i])
                    uri = uri.replace("ipfs://", pinataURL)
                    let nftMetaData = await axios.get(uri)
                    nftMetaData.data.image = nftMetaData.data.image.replace("ipfs://", pinataURL)
                    console.log(nftMetaData.data.image)
                    nftArr.push(nftMetaData)
                }
                
                setUserAssets(nftArr)
                setLoading(false)
            }else{
                setLoading(true)
            }
            
        
        }
    
    if (user){
        loadNFTs()
    }
    
    
    return ()=> setUserAssets([])
    
    },[user])

    async function sellAsset(nft, index){

        if (!listPrice){return}
        else{
            setLoading(true)
            try{
                let userNfts = [...userAssets]
                const nftMarketCreate = await contract.marketContract.createMarketItem(
                    drinkingTreesTwo, 
                    nft.data.id, 
                    ethers.utils.parseEther(listPrice)
                    )
                const marketCreateReceipt = await nftMarketCreate.wait()
                const event = await marketCreateReceipt.events?.find(event => event.event === 'MarketItemCreated')
                setListPrice(null)
                setLoading(false)
                userNfts.splice(index, 1)
                setUserAssets(userNfts)
            } catch (e){
                setLoading(false)
                console.log(e)
            }
          
        }
        
      }
  
    function handlePriceChange(e){
        setListPrice(e.target.value)
    }

    return { userAssets, handlePriceChange, loading}
}
