import MainContainer  from '../containers/main'
import TeamContainer from '../containers/team'
import RoadMapContainer from '../containers/roadmap'
import FAQSContainer from '../containers/faqs'
import logLandingPage from '../apis/backend/loglandingpage'


export default function Home() {

  logLandingPage()

  return (
      <>
        <MainContainer/>
        <TeamContainer/>
      </>
  )
}
