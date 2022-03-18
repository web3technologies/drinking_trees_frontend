import { useState, useEffect } from 'react';
import { Team } from '../styles/components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { safeOpen } from '../helpers/safeopen'
import { faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function TeamContainer(){

    const url = "https://gateway.pinata.cloud/ipfs/QmQBHrUk5ev9gvsHHk3ToMSixBWMhTvTZ6NpRK1ueSUdxB"
    
    const tikTokStyle = {
        width: "25%",
        color: "#FFFFFF",
        cursor: "pointer"
    }

    const youtTubeStyle = {
        width: "25%",
        color: "#ff0000",
        cursor: "pointer"
    }


    const data = [
        {
            image: url,
            username: "VelveteenCryptoGirl",
            title: "Artist/Designer",
            socials: null
        },
        {
            image: url,
            username: "dannyboy",
            title: "Lega/Community Lead",
            socials: null
        },
        {
            image: url,
            username: "doctorculture",
            title: "Social Media Content Marketing",
            socials:[
                {
                    link: "https://www.tiktok.com/@doctorculture", 
                    style: tikTokStyle,
                    icon: faTiktok
                },
                {
                    link:  "https://www.youtube.com/doctorculture", 
                    style:  youtTubeStyle,
                    icon:  faYoutube
                },
            ],
        },
        {
            image: url,
            username: "Buy_It_All",
            title: "Front-End and Blockchain Developer",
            socials: null
        }
    ]


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
                                            card.socials ?
                                            
                                                card.socials.map((social, idx) => {
                                                    return <FontAwesomeIcon
                                                        key={idx} 
                                                        icon={social.icon} 
                                                        style={social.style} 
                                                        onClick={()=> {safeOpen(social.link)}}
                                                    />
                                                }) 
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