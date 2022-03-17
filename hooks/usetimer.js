
import { useState, useEffect, useRef } from 'react'


export default function useTimer(){

    const [ timerDays, setTimerDays ] = useState("00")
    const [ timerHours, setTimerHours ] = useState("00")
    const [ timerMinutes, setTimerMinutes ] = useState("00")
    const [ timerSeconds, setTimerSeconds ] = useState("00")
    const [ finished, setFinished ] = useState(false)
    const [ time, setTime ] = useState()

    let timer;

    const startTimer = ()=> {
        const countDownDate = new Date("April 22 2022 00:00:00").getTime();
        
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
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
                setTime(`${days} Days, ${hours}:${minutes}:${seconds} till Mint`)
            }

        }, 1000)

    }

    useEffect(()=>{

        startTimer()

        return () => {
            clearInterval(timer)
        }
    },[])

    
    return {time, finished, timerDays, timerHours, timerMinutes, timerSeconds  }

}