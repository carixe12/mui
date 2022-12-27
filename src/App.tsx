import React from 'react';
import { Grid, Box, TextField } from '@mui/material';

import './App.css';
import Card from './cards';
import MediaCard from './cards/MediaCard';
import { mediaCards } from './cards';
import { MuiAccordian } from './MuiAccordian';
import CustomIcons from './CustomIcons';


 const App =() => {
  return (
    <div className="App">
      <h1> Just learning Mui</h1>
      <MuiAccordian />
      <Box sx={{margin: 'auto', width:'300px'}} >
      <TextField  label='Seach User'/> 
      <CustomIcons />

      </Box>
      <Grid sx={{ justifyContent: 'center', width: 800, margin: 'auto'}} container spacing={5}> 
        {mediaCards.map((card) => {

            return (
            <Grid  key={card.id} item> 
              <MediaCard  {...card} />
            </Grid>
            )
        })}
       </Grid>
      </div>
  );
}

export default App;
