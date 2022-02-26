import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import Web3Modal from "web3modal"
/* pages/my-assets.js */
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Bank from '../artifacts/contracts/DrinkingTreesBank.sol/DrinkingTreesBank.json'
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"




export default function Mint(){


    const [bankBalance, setBankBalance] = useState();
    const [ ownerBalances, setOwnerBalances ] = useState({
        miriamBalance: null,
        danBalance: null,
        zachCookBalance: null,
        raymondBalance: null,
        zachComBalance: null,
        charityBalance: null
    })

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

            const miriamWallet = await bankContract.miriamAddress()
            const danWallet = await bankContract.danAddress()
            const zachCookWallet = await bankContract.zachCookAddress()
            const raymondWallet = await bankContract.raymondAddress()
            const zachComWallet = await bankContract.zachComAddress()
            const charityWallet = await bankContract.charityAddress()

            let miriamBalance = await provider.getBalance(miriamWallet)
            miriamBalance = ethers.utils.formatEther(BigNumber.from(miriamBalance).toString())

            let danBalance = await provider.getBalance(danWallet)
            danBalance = ethers.utils.formatEther(BigNumber.from(danBalance).toString())

            let zachCookBalance = await provider.getBalance(zachCookWallet)
            zachCookBalance = ethers.utils.formatEther(BigNumber.from(zachCookBalance).toString())

            let raymondBalance = await provider.getBalance(raymondWallet)
            raymondBalance = ethers.utils.formatEther(BigNumber.from(raymondBalance).toString())

            let zachComBalance = await provider.getBalance(zachComWallet)
            zachComBalance = ethers.utils.formatEther(BigNumber.from(zachComBalance).toString())

            let charityBalance = await provider.getBalance(charityWallet)
            charityBalance = ethers.utils.formatEther(BigNumber.from(charityBalance).toString())
            
            setOwnerBalances({
                miriamBalance: miriamBalance,
                danBalance: danBalance,
                zachCookBalance: zachCookBalance,
                raymondBalance: raymondBalance,
                zachComBalance: zachComBalance,
                charityBalance: charityBalance
            })

            let nftBankBalance = await provider.getBalance(bankAddress)
            nftBankBalance = ethers.utils.formatEther(BigNumber.from(nftBankBalance).toString()) 
            setBankBalance(nftBankBalance)
        }

        fetchBalance()

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
                <p>Miriam Balance {ownerBalances.miriamBalance} Eth</p>
                <p>Dan Balance {ownerBalances.danBalance} Eth</p>
                <p>ZachCook Balance {ownerBalances.zachCookBalance} Eth</p>
                <p>Raymond Balance {ownerBalances.raymondBalance} Eth</p>
                <p>ZachComm Balance {ownerBalances.zachComBalance} Eth</p>
                <p>Charity Balance {ownerBalances.charityBalance} Eth</p>
            </MainContainer>       
        </MainFrame>
        )
}