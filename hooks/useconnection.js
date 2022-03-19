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
        signer: null,
        address: null,
        isAdminUser: false,
    })

    const [chain, setChain] = useState({
        chainId: null,
        chainName: null,
        isCorrectChain: 'unsure'
    }) 


    const [ contract, setContract ] = useState({
        marketContract: null,
        nftContract: null,
        bankContract: null
    })


    useEffect(()=>{

        async function loadData(){

            if(window.ethereum){
                
                window.ethereum.on('accountsChanged', ()=>{
                    loadUser()
                })
    
                window.ethereum.on('chainChanged', (_chainId) => {                   
                    
                    if (_chainId !== "0xf49d"){
                        setChain({
                            chainId: _chainId,
                            isCorrectChain: "incorrect"
                        })
                    } else{
                        setChain({
                            chainId: _chainId,
                            isCorrectChain: "correct"
                        })
                    }
                });

            }else{
                window.alert("YOU NEED TO INSTALL METAMASK")
            }

            
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

    const switchNetwork = async () => {


        // if(metamask has chain installed)
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xf49d' }],
        });

        setChain({
            isCorrectChain: "correct"
        })

        // else install chain in metamask

      };


    async function loadUser(){


        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()

        const provider = new ethers.providers.Web3Provider(connection)

        const network = await provider.getNetwork()
        
        if (network.chainId === 62621){
            const signer = provider.getSigner()
            const address = await signer.getAddress()

            const nftContract = new ethers.Contract(drinkingTreesTwo, NFT.abi, signer)
            const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
            const bankContract = new ethers.Contract(bankAddress, Bank.abi, signer)

            let isAdmin;
            try{
                isAdmin = await bankContract.getAdminUser()
            } catch (e){
                isAdmin = false
            }

            setUser({
                provider: provider,
                signer: signer,
                address: address,
                isAdminUser: isAdmin
            })

            setContract({
                marketContract: marketContract,
                nftContract: nftContract,
                bankContract: bankContract
            })

            setChain({
                chainId: network.chainId,
                chainName: network.name,
                isCorrectChain: "correct"
            })
        }else{
            setChain({
                chainId: network.chainId,
                chainName: network.name,
                isCorrectChain: "incorrect"
            })
        }
    }

    return { user, chain, contract, loadUser, switchNetwork}
}