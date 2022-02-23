import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import Web3Modal from "web3modal"
/* pages/my-assets.js */

import axios from 'axios'
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Bank from '../artifacts/contracts/DrinkingTreesBank.sol/DrinkingTreesBank.json'
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"




export default function Mint(){

    const [balance, setBalance] = useState({
        nftBalance: null,
        marketBalance: null
    })

    const [bankBalance, setBankBalance] = useState();
    const [coinbaseBalances, setCoinbaseBalances ] = useState()

    useEffect(()=>{

        async function fetchBalance(){
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            let nftBalance = await provider.getBalance(drinkingTreesTwo)
            nftBalance = ethers.utils.formatEther(BigNumber.from(nftBalance).toString()) 
            
            let marketBalance = await provider.getBalance(nftmarketaddress)
            marketBalance = ethers.utils.formatEther(BigNumber.from(marketBalance).toString())

            let bankContract = new ethers.Contract(bankAddress, Bank.abi, provider)
            let coinbaseBalance = await bankContract.withdrawAddress()
            coinbaseBalance = await provider.getBalance(coinbaseBalance)
            coinbaseBalance = ethers.utils.formatEther(BigNumber.from(coinbaseBalance).toString())
            setCoinbaseBalances(coinbaseBalance)

            setBalance({
                marketBalance: marketBalance, 
                nftBalance: nftBalance
            })
            
            let nftBankBalance = await provider.getBalance(bankAddress)
            nftBankBalance = ethers.utils.formatEther(BigNumber.from(nftBankBalance).toString()) 
            setBankBalance(nftBankBalance)
        }

        fetchBalance()

        return ()=> setBalance({nftBalance: null, marketBalance: null})
    }, [])

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
                <Text>Bank Balance</Text>
                <p>{bankBalance} Eth</p>
                <br></br>
                <Button  type="button" onClick={withdrawBank} style={{width: "500px"}} color="#0052ff;">
                    Withdraw Bank
                </Button>
                <Text color="#0052ff;">Coinbase Balance</Text>
                <p>{coinbaseBalances} Eth</p>
            </MainContainer>       
        </MainFrame>
        )
}