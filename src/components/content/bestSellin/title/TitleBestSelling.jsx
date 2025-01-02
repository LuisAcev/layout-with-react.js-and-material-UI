import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export const TitleBestSellin = () => {

  return (

    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }}

    >
      <Typography variant="h6"
        sx={{ color: '#FFFFFF', 
              fontFamily: 'Poppins', 
              fontStyle: 'normal', 
              margin:'1.4rem', 
              paddingLeft:'0.5rem'  
            }}
      >
        Best Selling
      </Typography>

      <Button
        size="small"
        id="demo-customized-button"
        endIcon={<ArrowDropDownIcon sx={{ color: '#FFFFFF' }} />}
        sx={{ color: '#FFFFFF', 
              fontFamily: 'Poppins', 
              fontStyle: 'normal', 
              margin:'1.4rem', 
            }}
      >
        this week
      </Button>

    </Box>
  );
}