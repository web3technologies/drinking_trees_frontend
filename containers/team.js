import { useState, useEffect } from 'react';
import { Team } from '../styles/components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { safeOpen } from '../helpers/safeopen'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'


export default function TeamContainer(){

    const url = "https://gateway.pinata.cloud/ipfs/QmQBHrUk5ev9gvsHHk3ToMSixBWMhTvTZ6NpRK1ueSUdxB"

    const data = [
        {
            image: url,
            username: "VelveteenCryptoGirl",
            title: "Artist/Designer",
            twitter: null,
            tikTok: null
        },
        {
            image: url,
            username: "dannyboy",
            title: "Lega/Community Lead",
            twitter: null,
            tikTok: null
        },
        {
            image: url,
            username: "doctorculture",
            title: "Social Media Content Marketing",
            twitter: null,
            tikTok: "https://www.tiktok.com/@doctorculture"
        },
        {
            image: url,
            username: "buy_it_all",
            title: "Front-End and Blockchain Developer",
            twitter: null,
            tikTok: null
        }
    ]

    const twitterStle = {
        width: "25%",
        color: "#1da1f2",
        cursor: "pointer"
    }

    const tikTokStyle = {
        width: "25%",
        color: "#FFFFFF",
        cursor: "pointer"
    }
    
    useEffect(()=>{

        window.ethereum.on('chainChanged', (_chainId) => {                   
            console.log(_chainId);
        });

    },[])

    return (
        
        <Team>
            <Team.TeamBox>
                <Team.TeamText>The Team</Team.TeamText>
                <Team.CardFrame>
                    <Team.CardFrameTop>
                        {
                            data ?
                            data.map((card, idx) =>(
                                <Team.Card key={idx}>
                                    <Team.CardImage src={card.image}/>
                                    <Team.CardTitle>{card.username}</Team.CardTitle>
                                    <Team.CardSubTitle>{card.title}</Team.CardSubTitle>
                                    <Team.SocialMediaFrame>
                                        {
                                            card.tikTok ?
                                            <FontAwesomeIcon 
                                                icon={faTiktok} 
                                                style={tikTokStyle} 
                                                onClick={()=> {
                                                    card.tikTok ?
                                                    safeOpen(card.tikTok)
                                                    :
                                                    null
                                                }}
                                            />
                                            :
                                            null
                                        }
                                        
                                    </Team.SocialMediaFrame>
                                </Team.Card>
                            ))
                            :
                            null
                        }
                    </Team.CardFrameTop>
                    <Team.CardFrameBottom>
                        <Team.TeamText style={{fontSize: "38px", color: "white"}}>Advisor</Team.TeamText>
                        <Team.Card>
                            <Team.CardImage src={url}/>
                                <Team.CardTitle>ZAch</Team.CardTitle>
                                <Team.CardSubTitle>Founder Draco Dice</Team.CardSubTitle>
                                <Team.SocialMediaFrame>
                                    
                                    <FontAwesomeIcon 
                                        icon={faTiktok} 
                                        style={tikTokStyle} 
                                        onClick={() => safeOpen("https://dracodice.com/")}
                                    />
                            </Team.SocialMediaFrame>
                        </Team.Card>
                    </Team.CardFrameBottom>
                </Team.CardFrame>
            </Team.TeamBox>
        </Team>
    )
}