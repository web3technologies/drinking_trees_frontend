import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import Web3Modal from "web3modal"
/* pages/my-assets.js */

import axios from 'axios'
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"




export default function Mint(){

    const [balance, setBalance] = useState({
        nftBalance: null,
        marketBalance: null
    })

    const [bankBalance, setBankBalance] = useState();

    useEffect(()=>{

        async function fetchBalance(){
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            let nftBalance = await provider.getBalance(drinkingTreesTwo)
            nftBalance = ethers.utils.formatEther(BigNumber.from(nftBalance).toString()) 
            
            setBalance({
                ...balance, nftBalance: nftBalance
            })
            
            console.log(bankAddress)
            let nftBankBalance = await provider.getBalance(bankAddress)
            nftBankBalance = ethers.utils.formatEther(BigNumber.from(nftBankBalance).toString()) 
            setBankBalance(nftBankBalance)
        }

        fetchBalance()

        return ()=> setBalance({nftBalance: null, marketBalance: null})
    }, [])



    async function widthdrawNFTBalance(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)

        const withdraw = await contract.withdraw()
    }

    async function withdrawBank(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(bankAddress, NFT.abi, signer)

        const withdraw = await contract.withdraw()
    }




    return (
        
        <MainFrame>
            <MainContainer>
                <Text>Collect Contract Revenue</Text>
                <p>{balance.nftBalance} Eth</p>
                <Button  type="button" onClick={widthdrawNFTBalance} style={{width: "450px"}}>
                    Withdraw NFT Revenue
                </Button>
                <Button  type="button" onClick={withdrawBank} style={{width: "450px"}}>
                    Withdraw Bank
                </Button>
                <Text>Send to Coinbase</Text>
                <p>{bankBalance} Eth</p>
            </MainContainer>       
        </MainFrame>
        )
}