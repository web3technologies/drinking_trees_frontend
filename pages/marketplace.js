import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import Web3Modal from "web3modal"
/* pages/my-assets.js */

import axios from 'axios'
import {drinkingTreesTwo, nftmarketaddress} from '../config'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'


export default function CreateItem(){
  const [marketItems, setMarketItems] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

    // useEffect(()=>{
        
    //     async function loadMarketItems(){
    //       const web3Modal = new Web3Modal()
    //       const connection = await web3Modal.connect()
    //       const provider = new ethers.providers.Web3Provider(connection)
    //       const signer = provider.getSigner()
    //       const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
          
    //       const items = await marketContract.fetchMarketItems()
    //       const nftArr = []
    //       const base_url = "https://gateway.pinata.cloud/ipfs/"
    //       for (let i = 0; i<items.length; i++){
    //         const nftId = BigNumber.from(items[i].tokenId).toNumber()
    //         let nftPrice = BigNumber.from(items[i].price).toString()
    //         nftPrice = ethers.utils.formatEther(nftPrice)
    //         const seller = items[i].seller

    //         const nft = await axios.get(`${base_url}QmRE1aNGV8SEt5jcbKya6awzKuvSAdfRP73MWcgrF8wbML/${nftId}.json`)
            
    //         const img = nft.data.image.split("ipfs://")[1]
    //         nft.data.itemId = BigNumber.from(items[i].itemId).toNumber()
    //         nft.data.image = `${base_url}${img}` // mutate image item to be a link to pinata link.. some clients blocks ipfs link
    //         nft.data.price = nftPrice
    //         nft.data.seller = seller
    //         nft.data.nftId = nftId
    //         nftArr.push(nft)
    //         console.log(nft)
    //       }
    //       setMarketItems(nftArr)
          
    //     }

    //   loadMarketItems()

    //   return ()=> setMarketItems([])

    // },[])


    async function buyAsset(nft){
        console.log(nft)
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        console.log(nft.data.price)
        console.log(nft.data.nftId)
        try{
          const nftMarketCreate = await contract.createMarketSale(
            drinkingTreesTwo, 
            nft.data.itemId, 
            {value: ethers.utils.parseEther(nft.data.price)}
          )
          const marketCreateLog = await nftMarketCreate.wait()
          console.log("here")
          console.log(marketCreateLog)
          const event = marketCreateLog.events?.find(event => event.event === 'MarketSale')
          console.log(event)
        } catch (e){
          console.log("ERROR")
          console.log(e)
          console.log(e.data.message)
        }
    }

    return (

      <div>
       Coming Soon
      </div>
      )


}

