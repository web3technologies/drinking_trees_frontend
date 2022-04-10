
import { useState, useEffect } from 'react'


export default function useTimer(){

    const [ finished, setFinished ] = useState(false)
    const [ time, setTime ] = useState()

    let timer;

    const startTimer = ()=> {
<<<<<<< HEAD
        const countDownDate = new Date("April 28 2022 00:00:00").getTime();
=======
        const countDownDate = new Date(1651165200 * 1000).getTime();
>>>>>>> main
        
        timer = setInterval(()=>{
            const now = new Date().getTime()
            let distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            if (distance < 0){
                setFinished(true)
                clearInterval(timer.current)
            } else {
                setTime(`${days} Days, ${hours}:${minutes}:${seconds} until Mint`)
            }

        }, 1000)

    }

    useEffect(()=>{

        startTimer()

        return () => {
            clearInterval(timer)
        }
    },[])

    
    return {time}

}