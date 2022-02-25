import { useState, useEffect } from "react";
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from "../artifacts/contracts/DrinkingTreesCollection1.sol/DrinkingTrees.json"
import Bank from '../artifacts/contracts/DrinkingTreesBank.sol/DrinkingTreesBank.json'
import {drinkingTreesTwo, nftmarketaddress, bankAddress} from '../config'


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

            // provider.on("accountsChanged", (accounts) => {
            //     console.log(accounts);
            //   });
              
            //   // Subscribe to chainId change
            //   provider.on("chainChanged", (chainId) => {
            //     console.log(chainId);
            //   });
        }

        loadData()

        return ()=> {
            setContract({
                marketContract: null,
                nftContract: null,
                bankContract: null
            })
            setUser({
                provider: null,
                signer: null
            })
        }
    },[])


    

    return { user, contract}
}