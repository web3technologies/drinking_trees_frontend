import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import fetchContractData from '../apis/s3/fetchcontractdata'


export default function useMint(){



    const [ cost, setCost ] = useState({
        stringVal: null,
        etherVal: null
    })

    const [contractData, setContractData ] = useState({
        abi: null,
        address: null
    })
    
    const [ error, setError ] = useState(null)
    const [ minting, setMinting ] = useState(false)


    
    useEffect(()=>{
    
        async function loadData(){

            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)

            const nftData = await fetchContractData("contracts/DrinkingTrees.sol/DrinkingTrees.json")
            const nftAddress = await fetchContractData("contracts/address/DrinkingTrees.json")
            setContractData({abi: nftData.abi, address: nftAddress.address})

            const contract = new ethers.Contract(nftAddress.address, nftData.abi, provider)
            try {
                const cost = await contract.cost()
                const stringCost = ethers.utils.formatEther(BigNumber.from(cost).toString())
                setCost({
                    stringVal: stringCost,
                    etherVal: cost
                })
            } catch (e){
                console.log(e)
                console.log("there are errors")
            }
            
            
        }
    
        loadData()
    },[])
    
    async function mintNFT(user){

        const userAddress = await user.signer.getAddress()
        const contract = new ethers.Contract(contractData.address, contractData.abi, user.provider.getSigner())
        
        try{
            setError(null)
            const mint = await contract.mint(1, {value: cost.etherVal})
            setMinting(true)
            const mintLog = await mint.wait()
            
            const nfts = await contract.walletOfOwner(userAddress)

            for (let i = 0; i<nfts.length; i++){
                const uri = await contract.tokenURI(nfts[i])
                console.log(uri)
            }
            
            
            // const event = mintLog.events?.find(event => event.event === 'MarketItemCreated')
            setMinting(false)
        } catch (err){
            
            console.log("error")
            console.log(err.message)
            setError(err.message) 
        }
            
            
        }

        


    return { mintNFT }
}


