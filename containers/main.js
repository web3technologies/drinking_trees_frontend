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


export default function MainContainer(){

    return (
        <Main>
            <Main.MainFrameInner>
                <Main.MainFrameLeft>
                    <Main.MainText>Drinking Trees NFT <a style={{color: "#049829"}}>Collection</a></Main.MainText>
                    <Main.SupportTextFrame>
                        <Main.SupportingText>In Celebration of Earth Day and Arbor Day, we bring you 10,000 Drinking Trees</Main.SupportingText>
                        <Main.SupportingText>10% of all proceeds to <a style={pStyle} onClick={()=>safeOpen("https://onetreeplanted.org/")}>One Tree Planted</a></Main.SupportingText>
                        <Main.SupportingText>Mint Period : Earth Day - Arbor Day (4/22 - 4/29)</Main.SupportingText>
                        <Main.MultivacFrame onClick={addMultiVac}>
                            <Main.MultiVacLogo src={`${baseExampleURL}Polygon_Logo_for_drinkingtrees.io.vff.png`} style={{padding: "6px", background: "white", borderRadius: "8px"}}/>
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


