import React from 'react';

import { FooterFrame, FooterFrameInner, FooterText, IconFrame } from './styles/footer';


export default function Footer({children, ...restProps}){

    return <FooterFrame {...restProps}>{children}</FooterFrame>
}

Footer.FooterFrameInner = function FooterFooterFrameInner({children, ...restProps}) {
    return <FooterFrameInner {...restProps}> {children}</FooterFrameInner>
}

Footer.FooterText = function FooterFooterText({children, ...restProps}) {
    return <FooterText {...restProps}> {children}</FooterText>
}

Footer.IconFrame = function FooterIconFrame({children, ...restProps}) {
    return <IconFrame {...restProps}> {children}</IconFrame>
}