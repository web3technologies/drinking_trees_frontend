import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQS, Team } from "../styles/components"
import { faqsData } from '../config/faqs' 


const accordionStyle={
    width: "95%",

}
const typ = {
    fontFamily: 'Fjalla One',
    fontSize: "24px"
}
const answerStyle ={
    fontFamily: 'Fjalla One',
    fontSize: "16px"
}
const title = {
    fontSize: "36px",
    margin: "20px 0"
}

export default function FAQSContainer(){

    return (
        <FAQS>
            <FAQS.FAQSFrameInner>
            <Team.TeamText style={title}>FAQS</Team.TeamText>
                {
                    faqsData.map((faq, idx)=>(
                        <Accordion key={idx} style={accordionStyle}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={typ}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    faq.answers.map((answer, idx)=>(
                                        <Typography key={idx} style={answerStyle}>
                                            {answer}
                                        </Typography>
                                    ))
                                }
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
                

            </FAQS.FAQSFrameInner>
        </FAQS>
    )
    
    
    
}