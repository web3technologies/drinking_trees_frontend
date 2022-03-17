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