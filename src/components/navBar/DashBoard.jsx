import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './dashBoard.css';

export default function DashBoard () {
  return (
    
    <Box  >
      
        <Toolbar variant="dense" className='dashboard' sx={{display: { xs: 'none', lg: 'block'}}}> {/*Se aplican temas personalizados */}
          <Typography variant="h6" color="inherit" component="div" >
          <p className='textDashBoard'>
              DashBoard /
          </p>
            
          </Typography>
        </Toolbar>

    </Box>
  );
}