import React from 'react'
// component
import { Main }   from '../styles/components';
import { addMultiVac } from '../helpers/addChain';
import useTimer from '../hooks/usetimer';
import useExampleImages from '../hooks/useExamples';
import CircularProgress from '@mui/material/CircularProgress';

const TimeFrame = ()=>{
    // used to prevent reload of the entire main container each second
    const { time } = useTimer()
    return <Main.CountDownText>{time}</Main.CountDownText>
}

const ImageComponent = ()=>{

    const { image } = useExampleImages()


    if ( image ){
        return <Main.Image src={image}/>
    } else {
        return (
            <Main.LoadingFrame>
                <CircularProgress />
            </Main.LoadingFrame>
        )
    }

}


export default function MainContainer(){

    return (
        <Main>
            <Main.MainFrameInner>
                <Main.MainFrameLeft>
                    <Main.MainText>Drinking Trees NFT <a style={{color: "#049829"}}>Collection</a></Main.MainText>
                    <Main.SupportTextFrame>
                        <Main.SupportingText>In Celebration of Earth Day and Arbor Day, we bring you 5,000 Drinking Trees</Main.SupportingText>
                        <Main.SupportingText>10% of all proceeds to the Arbor Day Foundation</Main.SupportingText>
                        <Main.SupportingText>Mint Period : Earth Day - Arbor Day (4/22 - 4/29)</Main.SupportingText>
                        <Main.MultivacFrame onClick={addMultiVac}>
                            <Main.MultiVacLogo src={"https://gateway.pinata.cloud/ipfs/QmPTjYUsCV5BLcc859yGtnDQU35HgQMJojXTRb7sB3b8Rk"}/>
                            <Main.SmallText>Click to add blockchain</Main.SmallText>
                        </Main.MultivacFrame>
                        <Main.ExploreDiv>
                            <Main.CollectionLink>Explore Collection (Coming Soon)</Main.CollectionLink>
                        </Main.ExploreDiv>
                    </Main.SupportTextFrame>
                </Main.MainFrameLeft>
                <Main.MainFrameRight>
                    <Main.ImageFrame>
                        <ImageComponent/>
                        <Main.CountDownFrame>
                            <TimeFrame/>
                        </Main.CountDownFrame>
                    </Main.ImageFrame>
                </Main.MainFrameRight>
            </Main.MainFrameInner>
        </Main>
    )

}


