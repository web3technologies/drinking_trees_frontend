import { Team } from '../styles/components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { safeOpen } from '../helpers/safeopen'
import { teamData, advisorData} from '../config/team';


export default function TeamContainer(){
    
    
    return (
        
        <Team>
            <Team.TeamBox>
                <Team.TeamText>The Team</Team.TeamText>
                <Team.CardFrame>
                    <Team.CardFrameTop>
                        {
                            teamData ?
                            teamData.map((card, idx) =>(
                                <Team.Card key={idx}>
                                    <Team.CardImage src={card.image}/>
                                    <Team.CardTitle>{card.username}</Team.CardTitle>
                                    <Team.CardSubTitle>{card.title}</Team.CardSubTitle>
                                    <Team.SocialMediaFrame justifyContent={ card.socials ? card.socials.length > 1 ? "space-between": null : null}>
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
                            <Team.CardImage src={advisorData.image}/>
                                <Team.CardTitle>{advisorData.username}</Team.CardTitle>
                                <Team.CardSubTitle>{advisorData.title}</Team.CardSubTitle>
                                <Team.SocialMediaFrame> 
                            </Team.SocialMediaFrame>
                        </Team.Card>
                    </Team.CardFrameBottom>
                </Team.CardFrame>
            </Team.TeamBox>
        </Team>
    )
}