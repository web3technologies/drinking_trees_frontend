import React from 'react'
import Link from 'next/link'
// component
import { Main }   from '../styles/components';

import useTimer from '../hooks/usetimer';

export default function MainContainer(){

   const {  time } = useTimer()

    return (
        <Main>
            <Main.MainFrameInner>
                <Main.MainFrameLeft>
                    <Main.MainText>Drinking Trees NFT <a style={{color: "#049829"}}>Collection</a></Main.MainText>
                    <Main.SupportTextFrame>
                        <Main.SupportingText>In Celebration of Earth Day and Arbor Day, we bring you 5,000 Drinking Trees</Main.SupportingText>
                        <Main.SupportingText>10% of all proceeds to the Arbor Day Foundation</Main.SupportingText>
                        <Main.SupportingText>Mint Period : Earth Day - Arbor Day (4/22 - 4/29)</Main.SupportingText>
                        <Main.MultivacFrame>
                            <Main.MultiVacLogo src={"https://gateway.pinata.cloud/ipfs/QmPTjYUsCV5BLcc859yGtnDQU35HgQMJojXTRb7sB3b8Rk"}/>
                            <Main.SmallText>Click to add chain</Main.SmallText>
                        </Main.MultivacFrame>
                        <Main.ExploreDiv>
                            <Main.CollectionLink>Explore Collection</Main.CollectionLink>
                        </Main.ExploreDiv>
                    </Main.SupportTextFrame>
                </Main.MainFrameLeft>
                <Main.MainFrameRight>
                    <Main.ImageFrame>
                        <Main.Image src={"https://gateway.pinata.cloud/ipfs/QmQBHrUk5ev9gvsHHk3ToMSixBWMhTvTZ6NpRK1ueSUdxB"}/>
                        <Main.CountDownFrame>
                            <Main.CountDownText>{time}</Main.CountDownText>
                        </Main.CountDownFrame>
                    </Main.ImageFrame>
                </Main.MainFrameRight>
            </Main.MainFrameInner>
        </Main>
    )

}