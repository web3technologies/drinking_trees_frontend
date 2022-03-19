import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/components';



export default function UserContainer({user, chain, loadUser, switchNetwork={switchNetwork}}){

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
                <Navigation.ConnectButton onClick={loadUser}>Connect</Navigation.ConnectButton>
            }
        </>
    
        )


}