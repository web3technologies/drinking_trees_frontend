import MainContainer  from '../containers/main'
import TeamContainer from '../containers/team'
import RoadMapContainer from '../containers/roadmap'
import FAQSContainer from '../containers/faqs'

export default function Home() {

  return (
      <>
        <MainContainer/>
        <FAQSContainer/>
        <RoadMapContainer/>
        <TeamContainer/>
      </>
  )
}
