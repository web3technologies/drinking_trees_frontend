import { Footer } from "../styles/components";
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { safeOpen } from '../helpers/safeopen'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'

export default function FooterFrame(){

    const tikTokStyle = {
        width: "30px",
        height: "30px",
        color: "#1da1f2",
        cursor: "pointer",
    }

    const youtTubeStyle = {
        width: "30px",
        height: "30px",
        color: "#5865f2",
        cursor: "pointer"
    }

    return (
        <Footer>
            <Footer.FooterFrameInner>
                <Footer.FooterText>
                    NFTs4TreesLLC
                </Footer.FooterText>
                <Link href="/terms" >
                    <Footer.FooterText style={{color: "white", cursor: "pointer"}}>
                        Terms conditions
                    </Footer.FooterText>
                </Link>
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