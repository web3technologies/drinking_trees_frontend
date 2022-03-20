import { Terms } from "../styles/components"
import { terms } from "../config/terms"

export default function TermsContainer(){



    return (

        <Terms>
            <Terms.TermsFrameInner>
                <Terms.TermsTitle>Terms & Conditions</Terms.TermsTitle>
                
                {
                    terms.map((term, idx)=>(
                        <>
                            <Terms.ParagraphDiv key={idx}>
                                <Terms.ParagraphTitle>{term.title}</Terms.ParagraphTitle>
                                <Terms.ParagraphText>{term.text}</Terms.ParagraphText>
                            </Terms.ParagraphDiv>
                        </>
                    ))
                }
                
                
            </Terms.TermsFrameInner>
        </Terms>

    )
}