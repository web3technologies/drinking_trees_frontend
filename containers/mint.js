import { Main, Mint }   from '../styles/components';
import { baseExampleURL } from '../config/config';
import TimeFrame from './time';


export default function MintContainer(){

    const infoStyle={
        fontSize: "18px"
    }

    return (
        <Main>
            <Mint>
                <Mint.MainFrameInner>

                    <Mint.MintFrameLeft>
                        <Mint.MainText>Drinking Trees NFT Collection</Mint.MainText>
                        <Mint.InfoFrame>
                            <Mint.InfoCard>
                                <Mint.InfoText style={infoStyle}>Status</Mint.InfoText>
                                <Mint.InfoText>Minting!</Mint.InfoText>
                            </Mint.InfoCard>
                            <Mint.InfoCard>
                                <Mint.InfoText style={infoStyle}>Price</Mint.InfoText>
                                <Mint.InfoText>$50</Mint.InfoText>
                            </Mint.InfoCard>
                            <Mint.InfoCard>
                                <Mint.InfoText style={infoStyle}>Total</Mint.InfoText>
                                <Mint.InfoText>10,000</Mint.InfoText>
                            </Mint.InfoCard>
                            <Mint.InfoCard>
                                <Mint.InfoText style={infoStyle}>Remaining</Mint.InfoText>
                                <Mint.InfoText>3200</Mint.InfoText>
                            </Mint.InfoCard>
                        </Mint.InfoFrame>
                        <Mint.MintButton>Mint!</Mint.MintButton>
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
    )
}