import MainContainer  from '../containers/main'
import TeamContainer from '../containers/team'
import RoadMapContainer from '../containers/roadmap'
import FAQSContainer from '../containers/faqs'
import logLandingPage from '../apis/backend/loglandingpage'
import styled from 'styled-components';

export const MainBody = styled.body`
margin:0;
padding:0;
top:0;
height:2000px;
// background: var(--skyblue-color);
font-family: 'Gotham Black', sans-serif;c 
background-size:cover;
background-position:center;
height:100vh;
`

export default function Home() {


  logLandingPage()

  return (
      <>
      <MainBody>
        <MainContainer/>
        <TeamContainer/>
        </MainBody>
      </>
  )
}
