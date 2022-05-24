import {baseBackendUrl} from '../../config/config';
import axios from 'axios'


export default async function logLandingPage(){

    try{
        const res = await axios.get(`${baseBackendUrl}/logging/landingpage`)
    } catch (e){
        console.log(e)
    }
   
    

}