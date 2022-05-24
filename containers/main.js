import React from 'react'
// component
import { Main }   from '../styles/components';
import TimeFrame from './time'
import { baseExampleURL } from '../config/config';
import { safeOpen } from '../helpers/safeopen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faPlaystation} from '@fortawesome/free-brands-svg-icons'


const tikTokStyle = {
    width: "30px",
    height: "30px",
    color: "#1da1f2",
    cursor: "pointer",
}

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
          
            <Main.Heading>Drinking Trees NFT Collection</Main.Heading>

            
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
                        <Main.ExploreDiv>
                            <Main.CollectionLink>Explore Collection (Coming Soon)</Main.CollectionLink>
                            <Main.LinkLogo><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"/>
                                {/* <FontAwesomeIcon
                        icon={faPlaystation} 
                        style={tikTokStyle} 
                        onClick={()=> {safeOpen("https://twitter.com/drinkingtrees")}}/> */}
                    </Main.LinkLogo>
                        </Main.ExploreDiv>
                       
                    </Main.SupportTextFrame>
                    
                </Main.MainFrameLeft>
                
                <Main.MainFrameRight>
                   
                    <img src="https://i.imgur.com/LrfQX1G.png"/>
                    <Main.BlueDiv>
                        
                    </Main.BlueDiv>
                    <Main.PurpleDiv></Main.PurpleDiv>
                </Main.MainFrameRight>
                
            </Main.MainFrameInner>
            
            
        </Main>
    )

}


