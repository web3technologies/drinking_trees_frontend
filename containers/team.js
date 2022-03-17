import { useState, useEffect } from 'react';
import { Team } from '../styles/components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { safeOpen } from '../helpers/safeopen'
import { faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'


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

    return (
        
        <Team>
            <Team.TeamBox>
                <Team.TeamText>The Team</Team.TeamText>
                <Team.CardFrame>
                    <Team.CardFrameTop>
                        {
                            data ?
                            data.map((card, idx) =>(
                                <Team.Card >
                                    <Team.CardImage src={card.image}/>
                                    <Team.CardTitle>{card.username}</Team.CardTitle>
                                    <Team.CardSubTitle>{card.title}</Team.CardSubTitle>
                                    <Team.SocialMediaFrame>
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
                                    </Team.SocialMediaFrame>
                                </Team.Card>
                            ))
                            :
                            null
                        }
                    </Team.CardFrameTop>
                </Team.CardFrame>
            </Team.TeamBox>
        </Team>
    )
}