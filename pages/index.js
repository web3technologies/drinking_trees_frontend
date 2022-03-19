import MainContainer  from '../containers/main'
import TeamContainer from '../containers/team'
import RoadMapContainer from '../containers/roadmap'
import FAQSContainer from '../containers/faqs'
import { useEffect } from 'react'

export default function Home() {


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

  return (
      <>
        <MainContainer/>
        <FAQSContainer/>
        <RoadMapContainer/>
        <TeamContainer/>
      </>
  )
}
