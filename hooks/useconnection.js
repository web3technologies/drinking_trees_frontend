import { useState, useEffect } from "react";
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Bank from '../artifacts/contracts/DrinkingTreesBank.sol/DrinkingTreesBank.json'
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'
import { id } from "ethers/lib/utils";


export default function useConnection(){

    const [ user, setUser ] = useState({
        provider: null,
        signer: null
    })
    const [ contract, setContract ] = useState({
        marketContract: null,
        nftContract: null,
        bankContract: null
    })


    useEffect(()=>{

        async function loadData(){

            // if(window.ethereum){
            //     window.ethereum.on('accountsChanged', ()=>{
            //         console.log("changing")
            //         loadUser()
            //         console.log(user.provider)
            //     })
    
            //     window.ethereum.on('chainChanged', (_chainId) => {                   
            //         loadUser()
            //     });
            // }

            // if(user.provider){
            //     user.provider.on("accountsChanged", (accounts) => {
            //         console.log(accounts);
            //     });
            // }
            loadUser()

            
        }

        loadData()

        

        return ()=> {
            setContract({
                marketContract: null,
                nftContract: null,
                bankContract: null
            })

            
        }
    },[])


    async function loadUser(){
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()

        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        setUser({
            provider: provider,
            signer: signer
        })


        const nftContract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        const bankContract = new ethers.Contract(bankAddress, Bank.abi, signer)

        setContract({
            marketContract: marketContract,
            nftContract: nftContract,
            bankContract: bankContract
        })
    }

    

    return { user, contract, loadUser}
}