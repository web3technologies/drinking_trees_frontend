/* pages/my-assets.js */
import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import {drinkingTreesTwo, nftmarketaddress} from '../config'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"


export default function MyAssets() {
    const [nfts, setNfts] = useState([])

    useEffect(()=>{
        
        async function loadNFTs(){
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)
          const signer = provider.getSigner()
          
          const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
          const test_address = await signer.getAddress()
          let newData = await contract.walletOfOwner(test_address)

          const intArr = []
          for (let i = 0; i<newData.length; i++){
              intArr.push(BigNumber.from(newData[i]).toNumber())
          }

          const test_arr = []
          const base_url = "https://gateway.pinata.cloud/ipfs/"
          for (let i = 1; i<=intArr.length; i++){
            const nft = await axios.get(`${base_url}QmRE1aNGV8SEt5jcbKya6awzKuvSAdfRP73MWcgrF8wbML/${i}.json`)
            const img = nft.data.image.split("ipfs://")[1]
            nft.data.image = `${base_url}${img}`
            test_arr.push(nft)
            console.log(nft.data.image)
          }
          
          setNfts(test_arr)
          
        }

      loadNFTs()

      return ()=> setNfts([])

    },[])


    async function sellAsset(nft){
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
      console.log('here')
      const mint = await contract.createMarketItem(drinkingTreesTwo, 1, ethers.utils.parseEther("100.0"))
      console.log("Created?")
    }
  

    if (nfts.length === 0){
      return (
      <MainFrame>
        <Text color="green">No Trees yet</Text>
      </MainFrame>
      )
    }

  return (
    <MainFrame>
        <MainContainer>
          <Text>Your Collection</Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
              nfts.map((nft, i) => (
                <MainContainer key={i} className="border shadow rounded-xl overflow-hidden" width="100%">
                  <img src={nft ? nft.data.image : null}/>
                  <MainContainer>
                    <p style={{margin: "10px 0"}} className="text-2xl font-semibold">{nft ? nft.data.name: null}</p>
                    <MainContainer style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-black-400">{nft ? nft.data.description: null}</p>
                    </MainContainer>
                    <Button color="red" onClick={() => sellAsset(nft)}>Sell</Button>
                  </MainContainer>
                </MainContainer>
              ))
            }
          </div>
          </MainContainer>
      </MainFrame>
  )
}