import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import Web3Modal from "web3modal"
/* pages/my-assets.js */
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Bank from '../artifacts/contracts/DrinkingTreesBank.sol/DrinkingTreesBank.json'
import { MainFrame, MainContainer, Text, Button, IMG} from "../styles/base"
import DTable from "../components/table";



export default function Mint(){


    const [bankBalance, setBankBalance] = useState();
    const [ shareHolderData, setShareHolderData] = useState([])

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

            const shareHolders = await bankContract.getAllShareHolders()
            const convertedData = []
            
            for (let i=0; i<shareHolders.length; i++){
                
                let bal = await provider.getBalance(shareHolders[i].wallet)
                bal = ethers.utils.formatEther(BigNumber.from(bal).toString())
                const tempObj = {
                    name: shareHolders[i].username,
                    balance: bal,
                    address: shareHolders[i].wallet,
                    equityPercent: ethers.utils.formatUnits(shareHolders[i].equityPercent, 2) 
                }
                convertedData.push(tempObj)
            }

            setShareHolderData(convertedData)
            
            const equityPercentAllocated = await bankContract.equityPercentAllocated()

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
        
        <MainFrame style={{background: "#f8f8f8", height: "100vh"}}>
            <MainContainer justifyContent="flex-start">
                <Text>Bank Balance</Text>
                <p style={{fontSize: "28px", margin: "15px 0"}}>{bankBalance} Eth</p>
                <DTable tableData={shareHolderData}/>
                <br></br>
                <Button  type="button" onClick={withdrawBank} style={{width: "500px"}} color="#0052ff;">
                    Withdraw Bank
                </Button>
                
            </MainContainer>       
        </MainFrame>
        )
}