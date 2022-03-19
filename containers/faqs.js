import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQS } from "../styles/components"
import { makeStyles } from "@material-ui/core/styles";
import { faqsData } from '../config/faqs' 


const useStyles = makeStyles((theme) => ({
    accord: {
        width: "75%",
    },
    typ: {
        fontFamily: 'Fjalla One',
        fontSize: "24px"
    }
  }));


export default function FAQSContainer(){

    const classes = useStyles();

    console.log

    return (
        <FAQS>
            <FAQS.FAQSFrameInner>
                {
                    faqsData.map((faq, idx)=>(
                        <Accordion className={classes.accord} key={idx}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className = {classes.typ}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    faq.answers.map((answer, idx)=>(
                                        <Typography key={idx}>
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