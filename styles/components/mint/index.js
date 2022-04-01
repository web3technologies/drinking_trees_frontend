import React from 'react';
import { MintFrame, MintFrameInner, 
    MintFrameLeft, MainText, MintFrameRight,
     InfoFrame, InfoCard, InfoText, MintButton
} from './styles/mint'

export default function Mint({children, ...restProps}) {
    return <MintFrame {...restProps}>{children}</MintFrame>
}


Mint.MainFrameInner = function MintMintFrameInner({children, ...restProps}) {
    return <MintFrameInner {...restProps}> {children}</MintFrameInner>
}

Mint.MintFrameLeft = function MintMintFrameLeft({children, ...restProps}) {
    return <MintFrameLeft {...restProps}> {children}</MintFrameLeft>
}

Mint.MainText = function MintMainText({children, ...restProps}) {
    return <MainText {...restProps}> {children}</MainText>
}

Mint.InfoFrame = function MintInfoFrame({children, ...restProps}) {
    return <InfoFrame {...restProps}> {children}</InfoFrame>
}

Mint.InfoCard = function MintInfoCard({children, ...restProps}) {
    return <InfoCard {...restProps}> {children}</InfoCard>
}

Mint.InfoText = function MintInfoText({children, ...restProps}) {
    return <InfoText {...restProps}> {children}</InfoText>
}

Mint.MintButton = function MintMintButton({children, ...restProps}) {
    return <MintButton {...restProps}> {children}</MintButton>
}

Mint.MintFrameRight = function MintMintFrameRight({children, ...restProps}) {
    return <MintFrameRight {...restProps}> {children}</MintFrameRight>
}