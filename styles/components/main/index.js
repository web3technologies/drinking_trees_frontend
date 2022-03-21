import React from 'react';
import { 
    MainFrame, MainFrameInner, MainFrameLeft, 
     MainFrameRight, MainText, SupportTextFrame, SupportingText, ImageFrame, 
     Image, CountDownFrame, CountDownText, MultivacFrame, MultiVacLogo, SmallText, 
     ExploreDiv, CollectionLink, LoadingFrame} from './styles/main'

export default function Main({children, ...restProps}) {
    return <MainFrame {...restProps}>{children}</MainFrame>
}


Main.MainFrameInner = function MainMainFrameInner({children, ...restProps}) {
    return <MainFrameInner {...restProps}> {children}</MainFrameInner>
}

Main.MainFrameLeft = function MainMainFrameLeft({children, ...restProps}) {
    return <MainFrameLeft {...restProps}> {children}</MainFrameLeft>
}

Main.MainText = function MainMainText({children, ...restProps}) {
    return <MainText {...restProps}> {children}</MainText>
}

Main.SupportTextFrame = function MainSupportTextFrame({children, ...restProps}) {
    return <SupportTextFrame {...restProps}> {children}</SupportTextFrame>
}

Main.SupportingText = function MainSupportingText({children, ...restProps}) {
    return <SupportingText {...restProps}> {children}</SupportingText>
}

Main.MultivacFrame = function MainMultivacFrame({children, ...restProps}) {
    return <MultivacFrame {...restProps}> {children}</MultivacFrame>
}

Main.MultiVacLogo = function MainMultiVacLogo({children, ...restProps}) {
    return <MultiVacLogo {...restProps}></MultiVacLogo>
}

Main.SmallText = function MainSmallText({children, ...restProps}) {
    return <SmallText {...restProps}> {children}</SmallText>
}

Main.ExploreDiv = function MainExploreDiv({children, ...restProps}) {
    return <ExploreDiv {...restProps}> {children}</ExploreDiv>
}

Main.CollectionLink = function MainCollectionLink({children, ...restProps}) {
    return <CollectionLink {...restProps}> {children}</CollectionLink>
}

Main.MainFrameRight = function MainMainFrameRight({children, ...restProps}) {
    return <MainFrameRight {...restProps}> {children}</MainFrameRight>
}

Main.ImageFrame = function MainImageFrame({children, ...restProps}) {
    return <ImageFrame {...restProps}> {children}</ImageFrame>
}

Main.Image = function MainImage({children, ...restProps}) {
    return <Image {...restProps}></Image>
}

Main.CountDownFrame = function MainCountDownFrame({children, ...restProps}) {
    return <CountDownFrame {...restProps}> {children}</CountDownFrame>
}

Main.CountDownText = function MainCountDownText({children, ...restProps}) {
    return <CountDownText {...restProps}>{children}</CountDownText>
}

Main.LoadingFrame = function MainLoadingFrame({children, ...restProps}) {
    return <LoadingFrame {...restProps}>{children}</LoadingFrame>
}


