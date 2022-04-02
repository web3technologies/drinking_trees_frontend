import { useState, useEffect } from "react";
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import { configChainIdHex, configChainIdNum, baseBackendUrl} from '../config/config';
import { addMultiVac } from '../helpers/addChain';
import loginBackend from "../apis/backend/loginbackend";


export default function useConnection(){

    const [ hasMetaMask, setHasMetaMask ] = useState(true)
    const [ loadingUser, setLoadingUser ] = useState(false)

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


    useEffect(()=>{
        

        async function loadData(){

            if(window.ethereum){
                
                window.ethereum.on('accountsChanged', ()=>{
                    setUser(
                        {
                            provider: null,
                            signer: null,
                            address: null,
                            isAdminUser: false,
                        }
                    )
                })
    
                window.ethereum.on('chainChanged', (_chainId) => {                   
                    
                    console.log(_chainId)

                    if (_chainId !== configChainIdHex){
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
                setHasMetaMask(false)
            }

            
        }

        loadData()

        
        return ()=> {
            setUser({
                provider: null,
                signer: null,
                address: null,
                isAdminUser: false,
            })
        
            setChain({
                chainId: null,
                chainName: null,
                isCorrectChain: 'unsure'
            })
        }


    },[])

    // allows user to switch network
    // request the user to switch network.. Wait for it to be added and then log in the user
    const switchNetwork = async () => {

        try{
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: configChainIdHex }],
              });
      
            setChain({
                isCorrectChain: "correct"
            })
        }catch (e){ // try to switch then add then load
            const isAdded = await addMultiVac()
            if(isAdded){
                loadUser()
            }
            
        }

      };


    async function loadUser(){

        setLoadingUser(true)
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const network = await provider.getNetwork()


        if (network.chainId.toString() === configChainIdNum){
            const signer = provider.getSigner()
            const address = await signer.getAddress()
            
            const user = await loginBackend(address, signer)

            setLoadingUser(false)


            setUser({
                provider: provider,
                signer: signer,
                address: address,
                isAdminUser: user ? user.is_staff ? true : false : null
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

    return { user, chain, hasMetaMask, loadingUser, loadUser, switchNetwork}
}