import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { userTextField } from './stylesdashBoard';


export const BarBestSelling = () => {

  return (

    <Box sx ={{marginBottom:'1rem', textAlign:'center'}}>

      <ThemeProvider theme={userTextField}>

        <TextField
          variant="outlined"
          sx ={{width:'90%',}}
          value='Tuesday'
        />
      </ThemeProvider>
      
    </Box>
  );
}