import React from 'react';
import { 
    MainFrame, MainFrameInner, MainFrameLeft,
     MainFrameRight, MainText, ImageFrame, 
     Image, CountDownFrame, CountDownText } from './styles/main'

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
