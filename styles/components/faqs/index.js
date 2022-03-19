import React from 'react';

import { FAQSFrame, FAQSFrameInner, 
    Accordion, AccordionButton, 
    AccordionTitle, AccordionContent, AccordionText} from './styles/faqs';


export default function FAQS({children, ...restProps}){

    return <FAQSFrame {...restProps}>{children}</FAQSFrame>
}

FAQS.FAQSFrameInner = function FAQSFAQSFrameInner({children, ...restProps}) {
    return <FAQSFrameInner {...restProps}> {children}</FAQSFrameInner>
}

FAQS.Accordion = function FAQSAccordion({children, ...restProps}) {
    return <Accordion {...restProps}> {children}</Accordion>
}

FAQS.AccordionButton = function FAQSAccordionButton({children, ...restProps}) {
    return <AccordionButton {...restProps}> {children}</AccordionButton>
}

FAQS.AccordionTitle = function FAQSAccordionTitle({children, ...restProps}) {
    return <AccordionTitle {...restProps}> {children}</AccordionTitle>
}

FAQS.AccordionContent = function FAQSAccordionContent({children, ...restProps}) {
    return <AccordionContent {...restProps}> {children}</AccordionContent>
}

FAQS.AccordionText = function FAQSAccordionText({children, ...restProps}) {
    return <AccordionText {...restProps}> {children}</AccordionText>
}