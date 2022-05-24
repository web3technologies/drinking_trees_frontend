import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/components';
import { safeOpen } from '../helpers/safeopen';
import { baseExampleURL } from '../config/config';
import { faTwitter, faDiscord, faPlaystation} from '@fortawesome/free-brands-svg-icons'

export default function UserContainer({user, chain, hasMetaMask, loadUser, switchNetwork={switchNetwork}}){
    const tikTokStyle = {
        width: "30px",
        height: "30px",
        color: "#1da1f2",
        cursor: "pointer",
    }

    if (!hasMetaMask){
        return <Navigation.ConnectButton 
            style={{backgroundColor: "red"}} 
            onClick={()=>safeOpen("https://metamask.io/")}
        >Install MetaMask</Navigation.ConnectButton>
    }


    if(chain.isCorrectChain === "incorrect"){
        return (
            <Navigation.ConnectButton style={{backgroundColor: "red"}} onClick={switchNetwork}>Switch Chain</Navigation.ConnectButton>
        )
    }

    return (
        <>

            {
                user.address ?
                
                <Navigation.UserFrame>

                    <Navigation.UserFrameTop>
                        <Navigation.AddressText>...{user.address.toString().slice(user.address.length - 8)}</Navigation.AddressText>
                        <FontAwesomeIcon icon={faUser} color="white" style={{height: "25px"}}/> 
                    </Navigation.UserFrameTop>

                </Navigation.UserFrame>
            
                :
                    <Navigation.ConnectButton onClick={loadUser}>
                        <Navigation.MetaMaskIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"/>
                        Connect
                    </Navigation.ConnectButton>

            }
                    <Navigation.SocialsButtonTwitter onClick={loadUser}>
                    <FontAwesomeIcon
                        icon={faTwitter} 
                        style={tikTokStyle} 
                        onClick={()=> {safeOpen("https://twitter.com/drinkingtrees")}}/>
                    </Navigation.SocialsButtonTwitter >
                    <Navigation.SocialsButtonDiscord onClick={loadUser}>
                    <FontAwesomeIcon
                        icon={faDiscord} 
                        style={tikTokStyle} 
                        onClick={()=> {safeOpen("https://discord.com/channels/940060662158229505/940060662158229507")}}/>
                    </Navigation.SocialsButtonDiscord >
                
            
        </>
    
        )


}