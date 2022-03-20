import React from 'react';
import { TermsFrame, TermsFrameInner, 
    TermsTitle, ParagraphDiv, ParagraphTitle, ParagraphText 
} from './styles/terms'

export default function Terms({children, ...restProps}) {
    return <TermsFrame {...restProps}>{children}</TermsFrame>
}


Terms.TermsFrameInner = function TermsTermsFrameInner({children, ...restProps}) {
    return <TermsFrameInner {...restProps}> {children}</TermsFrameInner>
}

Terms.TermsTitle = function TermsTermsTitle({children, ...restProps}) {
    return <TermsTitle {...restProps}> {children}</TermsTitle>
}

Terms.ParagraphDiv = function TermsParagraphDiv({children, ...restProps}) {
    return <ParagraphDiv {...restProps}> {children}</ParagraphDiv>
}

Terms.ParagraphTitle = function TermsParagraphTitle({children, ...restProps}) {
    return <ParagraphTitle {...restProps}> {children}</ParagraphTitle>
}

Terms.ParagraphText = function TermsParagraphText({children, ...restProps}) {
    return <ParagraphText {...restProps}> {children}</ParagraphText>
}