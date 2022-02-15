import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import Web3Modal from "web3modal"
/* pages/my-assets.js */

import axios from 'axios'
import {drinkingTreesTwo, nftmarketaddress} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"


const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")

export default function CreateItem(){
  const [marketItems, setMarketItems] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

    useEffect(()=>{
        
        async function loadMarketItems(){
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)
          const signer = provider.getSigner()
          const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
          
          const items = await marketContract.fetchMarketItems()
          
          console.log(items)

          const test_arr = []
          const base_url = "https://gateway.pinata.cloud/ipfs/"
          for (let i = 57; i<=61; i++){
            const nft = await axios.get(`${base_url}QmRE1aNGV8SEt5jcbKya6awzKuvSAdfRP73MWcgrF8wbML/${i}.json`)
            const img = nft.data.image.split("ipfs://")[1]
            nft.data.image = `${base_url}${img}`
            test_arr.push(nft)
            console.log(nft.data.image)
          }
          
          setMarketItems(test_arr)
          
        }

      loadMarketItems()

      return ()=> setMarketItems([])

    },[])


    return (
      <MainFrame>
        <MainContainer>
          <Text>Nfts for sale</Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
              marketItems.map((nft, i) => (
                <MainContainer key={i} className="border shadow rounded-xl overflow-hidden" width="100%">
                  <img src={nft ? nft.data.image : null}/>
                  <MainContainer>
                    <p style={{margin: "10px 0"}} className="text-2xl font-semibold">{nft ? nft.data.name: null}</p>
                    <MainContainer style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-black-400">{nft ? nft.data.description: null}</p>
                      <p style={{margin: "10px 0"}} className="text-2xl font-semibold">Price: {(Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4)}</p>
                    </MainContainer>
                    <Button color="green">Buy</Button>
                  </MainContainer>
                </MainContainer>
              ))
            }
          </div>
          </MainContainer>
      </MainFrame>
    )


}

