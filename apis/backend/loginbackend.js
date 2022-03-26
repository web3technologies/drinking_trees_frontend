import {baseBackendUrl} from '../../config/config';
import axios from 'axios'


export default async function loginBackend(address, signer){
    let nonce;

    const data = {
        public_address: address
    }
    
    try {
        const res = await axios.post(`${baseBackendUrl}/web3auth/nonce`, data)
        nonce = res.data.nonce
    } catch (e){
        console.log(e)
    }

    if (nonce){

        const message = await signer.signMessage(nonce)
        const authData = {
            signature: message,
            nonce: nonce,
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