import { Box, Card, CardContent, Typography } from "@mui/material";



export const MuiCard = () => {
    return( <Box width='300'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>

                    </Typography>
                    <Typography variant="body2" color='text.Secondary'>
                    After selecting text with your mouse or keyboard, you can use the Copy 
    command to copy the text to the Windows Clipboard. 
            This replaces any data previously stored on the Clipboard. Alternatively, 
            you can copy text
                    </Typography>
                </CardContent>
            </Card>
       </Box>
    )
}