import { Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



export const MuiAccordian = () => {
    return ( <div>
        <h6> Filter</h6>
    <Accordion sx={{ justifyContent: 'center',width: 200, margin: 'left'}} >
        <AccordionSummary id='panel1-header' aria-controls="panel1-content" 
        expandIcon={<ExpandMoreIcon />}>
            <Typography>YOU FIND</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>  JUST CHECK IF AND FIND MORE </Typography>
        </AccordionDetails>

    </Accordion>

    <Accordion sx={{ justifyContent: 'center',width: 200, margin: 'left'}} >
        <AccordionSummary id='panel1-header' aria-controls="panel1-content" 
        expandIcon={<ExpandMoreIcon />}>
            <Typography>YOU FIND</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>  JUST CHECK IF AND FIND MORE </Typography>
        </AccordionDetails>

    </Accordion>
    <Accordion sx={{ justifyContent: 'center',width: 200, margin: 'left'}} >
        <AccordionSummary id='panel1-header' aria-controls="panel1-content" 
        expandIcon={<ExpandMoreIcon />}>
            <Typography>YOU FIND</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>  JUST CHECK IF AND FIND MORE </Typography>
        </AccordionDetails>

    </Accordion>
    </div>
    )
} 