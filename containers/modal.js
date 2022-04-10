import Modal from 'styled-react-modal'
import { Mint, Navigation }   from '../styles/components';
import { useContext, useState } from 'react'
import { UserContext } from '../context/user';


function MintButton({mintNFT}){

    const {loadUser, user, chain, switchNetwork} = useContext(UserContext)

    if(chain.isCorrectChain === "incorrect"){
        return (
            <Navigation.ConnectButton style={{backgroundColor: "red"}} onClick={switchNetwork}>Switch Chain</Navigation.ConnectButton>
        )
    }

    return (
        <>
            {
                user.address ?
                <Mint.MintButton onClick={ () => mintNFT(user)}>Mint!</Mint.MintButton>
                :
                <Mint.MintButton onClick={loadUser}>Connect</Mint.MintButton>
            }
        
        </>)


}


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

export default function FancyModalButton() {
    const [isOpen, setIsOpen] = useState(false)
  
    function toggleModal(e) {
      setIsOpen(!isOpen)
    }

    return (
        <>
            <Mint.MintButton onClick={toggleModal}>Mint!</Mint.MintButton>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                    <span>I am a modal!</span>
                    <button onClick={toggleModal}>Close me</button>
            </StyledModal>
        </>
      )
    }
  