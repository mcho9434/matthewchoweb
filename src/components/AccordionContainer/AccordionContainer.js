import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionContainer = (props) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{props.title}</Typography>
                {/* {props.title}      
                <p style={{ color: 'blue', textAlign:"right"}}>test</p>           */}
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionContainer;
