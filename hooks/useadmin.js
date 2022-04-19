import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import fetchContractData from '../apis/s3/fetchcontractdata'


export default function useAdmin(){

    const [contractData, setContractData ] = useState({
        abi: null,
        address: null
    })

    const [ balance, setBalance ] = useState()

    
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)
    
    useEffect(()=>{
        async function loadData(){

            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)

            const nftData = await fetchContractData("contracts/DrinkingTrees.sol/DrinkingTrees.json")
            const nftAddress = await fetchContractData("contracts/address/DrinkingTrees.json")

            setContractData({abi: nftData.abi, address: nftAddress.address})

            const newContract = new ethers.Contract(nftAddress.address, nftData.abi, provider)
                
            const balance = await provider.getBalance(newContract.address)
            const stringBalance = ethers.utils.formatEther(BigNumber.from(balance).toString())
            setBalance(stringBalance)
            console.log(await newContract.payoutAddress())
        
        }

        loadData()
    },[])


    async function withdrawBalance(){

    }
    
   return { balance,withdrawBalance }

}