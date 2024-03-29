import { Footer } from "../styles/components";
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { safeOpen } from '../helpers/safeopen'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import {bounce} from 'react-animations'


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
                {/* <Footer.FooterText>
                    DrinkingTrees
                </Footer.FooterText>
                <Link href="/terms" >
                    <Footer.FooterText style={{color: "white", cursor: "pointer"}}>
                        Terms and Conditions
                    </Footer.FooterText>
                </Link> */}
                <Footer.IconFrame>
                    {/* <FontAwesomeIcon
                        icon={faTwitter} 
                        style={tikTokStyle} 
                        onClick={()=> {safeOpen("https://twitter.com/drinkingtrees")}}
                    />
                    <FontAwesomeIcon
                        icon={faDiscord} 
                        style={youtTubeStyle} 
                        onClick={()=> {safeOpen("https://discord.com/channels/940060662158229505/940060662158229507")}}
                        
                    /> */}
                    <Footer.AnimationTreeImage>
                    <img src="https://i.imgur.com/jVhFQKi.png"/>
                        <img src="https://i.imgur.com/BjIMjJ6.png"/>
                        <img src="https://i.imgur.com/gjQXCTH.png"/>
                        <img src="https://i.imgur.com/Ghs3PhH.png"/>
                        <img src="https://i.imgur.com/2Fui5r6.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                        <img src="https://i.imgur.com/uE70ONX.png"/>
                        <img src="https://i.imgur.com/lw5QSM3.png"/>
                        <img src="https://i.imgur.com/BjIMjJ6.png"/>
                        <img src="https://i.imgur.com/gjQXCTH.png"/>
                        <img src="https://i.imgur.com/Ghs3PhH.png"/>
                        <img src="https://i.imgur.com/2Fui5r6.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                        <img src="https://i.imgur.com/uE70ONX.png"/>
                        <img src="https://i.imgur.com/lw5QSM3.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                    </Footer.AnimationTreeImage>
                    
                </Footer.IconFrame>
                    
                <Footer.IconFrame2>
                <Footer.AnimationTreeImage2>
                        <img src="https://i.imgur.com/jVhFQKi.png"/> 
                        <img src="https://i.imgur.com/BjIMjJ6.png"/>
                        <img src="https://i.imgur.com/gjQXCTH.png"/>
                        <img src="https://i.imgur.com/Ghs3PhH.png"/>
                        <img src="https://i.imgur.com/2Fui5r6.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                        <img src="https://i.imgur.com/uE70ONX.png"/>
                        <img src="https://i.imgur.com/lw5QSM3.png"/>
                        <img src="https://i.imgur.com/BjIMjJ6.png"/>
                        <img src="https://i.imgur.com/gjQXCTH.png"/>
                        <img src="https://i.imgur.com/Ghs3PhH.png"/>
                        <img src="https://i.imgur.com/2Fui5r6.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                        <img src="https://i.imgur.com/uE70ONX.png"/>
                        <img src="https://i.imgur.com/lw5QSM3.png"/>
                        <img src="https://i.imgur.com/kh3LBuG.png"/>
                        <img src="https://i.imgur.com/Wo33zNK.png"/>
                        </Footer.AnimationTreeImage2>
                </Footer.IconFrame2>
            </Footer.FooterFrameInner>
        </Footer>
    )
}