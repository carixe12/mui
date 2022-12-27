
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { makeStyles } from '@mui/styles';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader } from '@mui/material';

const styles =  ({
    root: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: '10px',
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
});

interface Props {
    title: string;
    description: string;
    image:string;
}


const  MediaCard =({ image, title, description}: Props)=> {
    
    return ( 
    <Card sx={styles.root}>
        <CardHeader  title='experment'/>
        <CardContent>
        <Typography gutterBottom variant='h5' component='div'>

</Typography>
<Typography variant="body2" color='text.Secondary'>
After selecting text with your mouse or keyboard, you can use the Copy 
command to copy the text to the Windows Clipboard. 
</Typography>
        </CardContent>
       
            
       

    </Card>
    );
}

export default MediaCard