import Image from 'next/image'

import { MainFrame, MainContainer, Text} from "../styles/base"
const GIF = require('../images/tree.png')
export default function Home() {


  return (
    <MainFrame>
      <MainContainer>
        <Text>This is the Drinking Trees NFT Collection</Text>
        <Text color="green">Here at Drinking Trees we are very motivated to saving every tree on Earth</Text>
        {/* <Image src={GIF} alt="loading..."></Image> */}
        <Text color="green">10% of all revenue will go directly to the Arbor Day Foundation</Text>
      </MainContainer>
    </MainFrame>
  )
}
