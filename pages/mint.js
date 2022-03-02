import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import {drinkingTreesTwo} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import { MainFrame, MainContainer, Text, Button} from "../styles/base"
// import Image from 'next/image'
// const GIF = require('../images/preview.gif')




export default function Mint(){

    const [ cost, setCost ] = useState({
        stringVal: null,
        etherVal: null
    })

    useEffect(()=>{
    
        async function loadData(){
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
            const cost = await contract.cost()
            const stringCost = ethers.utils.formatEther(BigNumber.from(cost).toString())
            setCost({
                stringVal: stringCost,
                etherVal: cost
            })
        }

        loadData()
    },[])

    async function mintNFT(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
        
        try{
            const mint = await contract.mint( {value: cost.etherVal})
            const mintLog = await mint.wait()
            console.log('before mint')
            console.log(mintLog)
            console.log(mintLog.logs)
        } catch (err){
            console.log(err.data) 
        }
        
    }

    return (
        
        <MainFrame>
            <MainContainer>
                <Text>Mint Your Drinking Tree here</Text>
                {/* <Image src={GIF} alt="loading..." ></Image> */}
                <Button  type="button" onClick={mintNFT}>
                    Mint NFT {cost.stringVal} ♦
                </Button>
            </MainContainer>       
        </MainFrame>
        )
}