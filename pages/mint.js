import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import {drinkingTreesTwo} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import CircularProgress from '@mui/material/CircularProgress';



export default function Mint(){

    const [ cost, setCost ] = useState({
        stringVal: null,
        etherVal: null
    })

    const [error, setError ] = useState(null)
    const [ minting, setMinting ] = useState(false)

    // useEffect(()=>{
    
    //     async function loadData(){
    //         const web3Modal = new Web3Modal()
    //         const connection = await web3Modal.connect()
    //         const provider = new ethers.providers.Web3Provider(connection)
    //         const signer = provider.getSigner()
    //         const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
    //         const cost = await contract.cost()
    //         const stringCost = ethers.utils.formatEther(BigNumber.from(cost).toString())
    //         setCost({
    //             stringVal: stringCost,
    //             etherVal: cost
    //         })
    //     }

    //     loadData()
    // },[])

    async function mintNFT(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
        
        try{
            setError(null)
            const mint = await contract.mint( {value: cost.etherVal})
            setMinting(true)
            const mintLog = await mint.wait()
            // const event = mintLog.events?.find(event => event.event === 'MarketItemCreated')

            console.log('before mint')
            console.log(mintLog)
            console.log(mintLog.event)
            setMinting(false)
        } catch (err){
            console.log("error here")
            console.log(err)
            setError(err.message) 
        }
        
    }

    return (
        <div>
       Coming Soon
      </div>
        )
}