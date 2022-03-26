import React from 'react';

import { FAQSFrame, FAQSFrameInner} from './styles/faqs';


export default function FAQS({children, ...restProps}){

    return <FAQSFrame {...restProps}>{children}</FAQSFrame>
}

FAQS.FAQSFrameInner = function FAQSFAQSFrameInner({children, ...restProps}) {
    return <FAQSFrameInner {...restProps}> {children}</FAQSFrameInner>
}
