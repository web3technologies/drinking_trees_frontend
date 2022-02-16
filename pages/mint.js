import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import {drinkingTreesTwo} from '../config'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import { MainFrame, MainContainer, Text, Button, IMG} from "./styles/base"
import Image from 'next/image'
const GIF = require('../images/preview.gif')




export default function Mint(){

    async function mintNFT(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
        const mintAmount = 1
        const mint = await contract.mint(mintAmount, {value: ethers.utils.parseEther("100.0")})
        // let minter = await mint.wait()
        
    }

    return (
        
        <MainFrame>
            <MainContainer>
                <Text>Mint Your Drinking Tree here</Text>
                <Image src={GIF} alt="loading..." ></Image>
                <Button  type="button" onClick={mintNFT}>
                    Mint NFT
                </Button>
            </MainContainer>       
        </MainFrame>
        )
}