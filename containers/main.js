import React from 'react'
// component
import { Main, Navigation }   from '../styles/components';
import { addMultiVac } from '../helpers/addChain';
import TimeFrame from './time'
import { baseExampleURL } from '../config/config';
import { safeOpen } from '../helpers/safeopen';



const pStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#4BF493"
}

const videoStyle = {
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
}

export default function MainContainer(){

    
    return (
        <Main>
            <Main.MainFrameInner>
{/* 
                <video  autoplay="autoplay" controls="controls">
                    <source src="https://drinkingtrees.s3.us-east-2.amazonaws.com/examples/Drinking+Trees+Website.mp4" type="video/mp4"/>
                </video> */}

                <Main.MainFrameLeft>
                    <Main.MainText>Drinking Trees NFT <a style={{color: "#049829"}}>Collection</a></Main.MainText>
                    <Main.SupportTextFrame>
                        <Main.SupportingText>In celebration of Arbor Day, we bring you 5,000 Drinking Trees</Main.SupportingText>
                        <Main.SupportingText>10% of all proceeds donated to <a style={pStyle} onClick={()=>safeOpen("https://onetreeplanted.org/")}>One Tree Planted</a></Main.SupportingText>
                        <Main.SupportingText>Mint Period: Starts the day before Arbor Day 4/28 - 5/1 at 1:00pm ET</Main.SupportingText>
                        <Main.MultivacFrame onClick={addMultiVac}>
                            {/* <Main.MultiVacLogo src={`${baseExampleURL}Polygon_Logo_for_drinkingtrees.io.vff.png`} style={{padding: "6px", background: "white", borderRadius: "8px"}}/> */}
                            <Main.LogoFrame>
                                <Navigation.MetaMaskIcon src={`${baseExampleURL}metamask.svg`} style={{width: "12%"}}/>
                                <Main.SmallText>Click to add blockchain</Main.SmallText>
                            </Main.LogoFrame>
                        </Main.MultivacFrame>
                        <Main.ExploreDiv>
                            <Main.CollectionLink>Explore Collection (Coming Soon)</Main.CollectionLink>
                        </Main.ExploreDiv>
                    </Main.SupportTextFrame>
                </Main.MainFrameLeft>
                <Main.MainFrameRight>
                    <Main.ImageFrame>
                        <Main.Image src={`${baseExampleURL}example_gif.gif`}/>
                        <Main.CountDownFrame>
                            <TimeFrame/>
                        </Main.CountDownFrame>
                    </Main.ImageFrame>
                </Main.MainFrameRight>
            </Main.MainFrameInner>
        </Main>
    )

}


