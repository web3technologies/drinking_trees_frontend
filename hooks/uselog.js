import { useEffect } from 'react'

export default function useLog(){


    useEffect(()=>{

        async function logHome(){
    
          try{
            const res = await fetch("http://localhost:8000/usage/homepage/")
          }catch(e){
            console.log(e)
          }
          
        }
    
        logHome()
    
      }, [])
}
 