import {baseBackendUrl} from '../../config/config';
import axios from 'axios'


export default async function loginBackend(address, signer){
    let message;

    const data = {
        public_address: address
    }
    
    try {
        const res = await axios.post(`${baseBackendUrl}/web3auth/nonce`, data)
        message = res.data.message
    } catch (e){
        console.log(e.response)
    }

    if (message){

        const signature = await signer.signMessage(message)
        const authData = {
            signature: signature,
            nonce: message,
            public_address: address
        }

        try {
            const res = await axios.post(`${baseBackendUrl}/web3auth/authenticate`, authData)
            sessionStorage.setItem("jwt", res.data.jwt)  
        } catch (e){
            console.log(e)
        }
    }


}