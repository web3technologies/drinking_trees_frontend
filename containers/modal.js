import Modal from 'styled-react-modal'
import { Mint, Navigation }   from '../styles/components';
import { useContext, useState } from 'react'
import { UserContext } from '../context/user';
import { Modal2 } from '../styles/components';
import useTimer from '../hooks/usetimer';


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
                <Mint.MintButton onClick={ () => mintNFT(user)} 
                    style={{ width: "80%"}}
                >Mint!</Mint.MintButton>
                :
                <Mint.MintButton onClick={loadUser}
                    style={{ width: "80%"}}
                >Connect</Mint.MintButton>
            }
        
        </>)


}

const StyledModal = Modal.styled`
  width: 50%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 28px;
`

export default function FancyModalButton({mintNFT}) {
    const [isOpen, setIsOpen] = useState(false)
    const { finished } = useTimer()

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }

    function mintNFTPay(){
        console.log("MINTING NFT PAY")
    }

    return (
        
        <>
        {
            finished || process.env.NEXT_PUBLIC_ENVIRONMENT !== "Production" ? 
            <Mint.MintButton onClick={toggleModal}>Mint!</Mint.MintButton>
            :
            <Mint.MintButton>Mint not available!</Mint.MintButton>
        }
            
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
            <Modal2>
                    <Modal2.ModalFrameLeft>
                        <Modal2.ModalMainText>Mint with NFTpay</Modal2.ModalMainText>
                        <Mint.MintButton 
                            onClick={mintNFTPay} 
                            style={{backgroundColor: "#14133d", width: "80%"}}
                        >
                            Mint!
                        </Mint.MintButton>
                    </Modal2.ModalFrameLeft>
                    <Modal2.ModalFrameRight>
                        <Modal2.ModalMainText>Mint with MetaMask</Modal2.ModalMainText>
                        <MintButton mintNFT={mintNFT}/>
                    </Modal2.ModalFrameRight>
            </Modal2>
            </StyledModal>
        </>
      )
    }
  






