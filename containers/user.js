import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/components';
import { safeOpen } from '../helpers/safeopen';
import { baseExampleURL } from '../config/config';

export default function UserContainer({user, chain, hasMetaMask, loadUser, switchNetwork={switchNetwork}}){


    // if (!hasMetaMask){
    //     return <Navigation.ConnectButton 
    //         style={{backgroundColor: "red"}} 
    //         onClick={()=>safeOpen("https://metamask.io/")}
    //     >Install MetaMask</Navigation.ConnectButton>
    // }


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

                    <Navigation.UserFrameBottom>
                        <Navigation.ConnectedText>Connected</Navigation.ConnectedText>
                    </Navigation.UserFrameBottom>

                </Navigation.UserFrame>
            
                :
                    <Navigation.ConnectButton onClick={loadUser}>
                        <Navigation.MetaMaskIcon src={`${baseExampleURL}metamask.svg`}/>
                        Connect
                    </Navigation.ConnectButton>
                
            }
        </>
    
        )


}