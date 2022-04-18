import { Main, Mint, Navigation }   from '../styles/components';
import { baseExampleURL } from '../config/config';
import TimeFrame from './time';
import useMint from '../hooks/usemint';
import { useContext } from 'react'
import { UserContext } from '../context/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


export default function MintContainer(){

    const { nftData, mintNFT, error, success } = useMint()

    const infoStyle={
        fontSize: "18px"
    }

    if(error){
        toast.error(error, {
            toastId: "customId",
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    if(success){
        toast.success(success, {
            toastId: "customId",
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <>
            <ToastContainer/>
            <Main>
                <Mint>
                    <Mint.MainFrameInner>
                    <Mint.MainTextMobile>Drinking Trees NFT Collection</Mint.MainTextMobile>
                        <Mint.MintFrameLeft>
                            <Mint.MainText>Drinking Trees NFT Collection</Mint.MainText>
                            <Mint.InfoFrame>
                                <Mint.InfoCard>
                                    <Mint.InfoText style={infoStyle}>Status</Mint.InfoText>
                                    <Mint.InfoText>{nftData.status}</Mint.InfoText>
                                </Mint.InfoCard>
                                <Mint.InfoCard>
                                    <Mint.InfoText style={infoStyle}>Price</Mint.InfoText>
                                    <Mint.InfoText>{nftData.price.stringVal}</Mint.InfoText>
                                </Mint.InfoCard>
                                <Mint.InfoCard>
                                    <Mint.InfoText style={infoStyle}>Total</Mint.InfoText>
                                    <Mint.InfoText>{nftData.maxSupply}</Mint.InfoText>
                                </Mint.InfoCard>
                                <Mint.InfoCard>
                                    <Mint.InfoText style={infoStyle}>Remaining</Mint.InfoText>
                                    <Mint.InfoText>{nftData.remaining}</Mint.InfoText>
                                </Mint.InfoCard>
                            </Mint.InfoFrame>
                            
                            <MintButton mintNFT={mintNFT}/>
                        </Mint.MintFrameLeft>

                        <Mint.MintFrameRight>
                            <Main.ImageFrame style={{width: "100%", minHeight: "0px"}}>
                                <Main.Image src={`${baseExampleURL}example_gif.gif`}/>
                                <Main.CountDownFrame>
                                    <TimeFrame/>
                                </Main.CountDownFrame>
                            </Main.ImageFrame>
                        </Mint.MintFrameRight>

                    </Mint.MainFrameInner>
                </Mint>
            </Main>
        </>
        
    )
}