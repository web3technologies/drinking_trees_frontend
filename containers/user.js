import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/components';



export default function UserContainer({user, chain, loadUser, switchNetwork={switchNetwork}}){

    if(chain.isCorrectChain === "incorrect"){
        return (
            <Navigation.ConnectButton style={{backgroundColor: "red"}} onClick={switchNetwork}>Incorrect Chain</Navigation.ConnectButton>
        )
    }

    return (
        <>

            {
                user.address ?
                
                <>
                    <p style={{color: "white"}}>...{user.address.toString().slice(user.address.length - 8)}</p>
                    <FontAwesomeIcon icon={faUser} color="white"/> 
                </>
            
                :
                <Navigation.ConnectButton onClick={loadUser}>Connect</Navigation.ConnectButton>
            }
        </>
    
        )


}