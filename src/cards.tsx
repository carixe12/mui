import MediaCard from './cards/MediaCard';
import Box from '@mui/material/Box';
import  Grid  from '@mui/material/Grid'

export const mediaCards =[
    { 
        id: 1,
        title:'experment',
        description: `After selecting text with your mouse or keyboard, you can use the Copy 
        command to copy the text to the Windows Clipboard. 
                This replaces any data previously stored on the Clipboard. Alternatively, 
                you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
                image:'',
},

{
    id: 2,
    title:'experment',
    description: `After selecting text with your mouse or keyboard, you can use the Copy 
    command to copy the text to the Windows Clipboard. 
            This replaces any data previously stored on the Clipboard. Alternatively, 
         you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
         image:'',

},

{ 
    id: 3,
    title:'experment',
    description: `After selecting text with your mouse or keyboard, you can use the Copy 
    command to copy the text to the Windows Clipboard. 
            This replaces any data previously stored on the Clipboard. Alternatively, 
            you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
            image:'',

},

{
    id: 4,
    title:'experment',
    description: `After selecting text with your mouse or keyboard, you can use the Copy 
    command to copy the text to the Windows Clipboard. 
            This replaces any data previously stored on the Clipboard. Alternatively, 
            you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
            image:'',
},

{
    id: 5,
title:'experment',
description: `After selecting text with your mouse or keyboard, you can use the Copy 
command to copy the text to the Windows Clipboard. 
        This replaces any data previously stored on the Clipboard. Alternatively, 
     you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
     image:'',

},

{
    id: 6,
title:'experment',
description: `After selecting text with your mouse or keyboard, you can use the Copy 
command to copy the text to the Windows Clipboard. 
        This replaces any data previously stored on the Clipboard. Alternatively, 
        you can copy text with the Copy button on the toolbar or by pressing CTRL+C.`,
        image:'',

},
];



export default function  Cards() {
    return ( 
        <Grid container spacing={5}>
        {mediaCards.map((mediaCard,i) => {
            return <Grid key={i} item> <MediaCard  {...mediaCard} />
            </Grid>
        })}
       </Grid>
          
    );
}
