import { Footer } from "../styles/components";
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { safeOpen } from '../helpers/safeopen'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterFrame(){

    const tikTokStyle = {
        width: "22%",
        color: "#1da1f2",
        cursor: "pointer"
    }

    const youtTubeStyle = {
        width: "22%",
        color: "#5865f2",
        cursor: "pointer"
    }

    return (
        <Footer>
            <Footer.FooterFrameInner>
                <Footer.FooterText>
                    Drinking Trees
                </Footer.FooterText>
                <Footer.FooterText>
                    NFTs4TreesLLC
                </Footer.FooterText>
                <Footer.FooterText style={{color: "white"}}>
                    Terms conditions
                </Footer.FooterText>
                <Footer.IconFrame>
                    <FontAwesomeIcon
                        icon={faTwitter} 
                        style={tikTokStyle} 
                        onClick={()=> {safeOpen("https://twitter.com/drinkingtrees")}}
                    />
                    <FontAwesomeIcon
                        icon={faDiscord} 
                        style={youtTubeStyle} 
                        onClick={()=> {safeOpen("https://discord.com/channels/940060662158229505/940060662158229507")}}
                    />
                </Footer.IconFrame>
            </Footer.FooterFrameInner>
        </Footer>
    )
}