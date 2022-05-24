import React from 'react';

import { FooterFrame, FooterFrameInner, FooterText, IconFrame, IconFrame2, AnimationTreeImage, AnimationTreeImage2 } from './styles/footer';


export default function Footer({children, ...restProps}){

    return <FooterFrame {...restProps}>{children}</FooterFrame>
}

Footer.FooterFrameInner = function FooterFooterFrameInner({children, ...restProps}) {
    return <FooterFrameInner {...restProps}> {children}</FooterFrameInner>
}
Footer.AnimationTreeImage = function FooterAnimationTreeImage({children, ...restProps}) {
    return <AnimationTreeImage {...restProps}> {children}</AnimationTreeImage>
}

Footer.AnimationTreeImage2 = function FooterAnimationTreeImage2({children, ...restProps}) {
    return <AnimationTreeImage2 {...restProps}> {children}</AnimationTreeImage2>
}

Footer.FooterText = function FooterFooterText({children, ...restProps}) {
    return <FooterText {...restProps}> {children}</FooterText>
}

Footer.IconFrame = function FooterIconFrame({children, ...restProps}) {
    return <IconFrame {...restProps}> {children}</IconFrame>
}
Footer.IconFrame2 = function FooterIconFrame2({children, ...restProps}) {
    return <IconFrame2 {...restProps}> {children}</IconFrame2>
}