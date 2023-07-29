import * as React from 'react';
import Box from '@mui/material/Box';
import { BestSelling } from './bestSellin/BestSellin';
import SalesComparations from './salesCompration/SalesComparations';
import Swiperchart from './swiper/Swiper';
import { Multicharts } from './multiCharts/MultiCharts';
import { Typography } from '@mui/material';
import './style.css'


const ContentComp = () => {

  return (

    <Box
      
      sx={{ display:        {lg:'flex', xs:'flex'},
            flexDirection:  {lg:'row', xs:'column' }, 
            gridColumnGap:  {lg:'4%', xs: '0%'},
            margin:         {lg:'3% 5% 5% 5%', xs: '5% 5% 5% 5%'} }}
          >
      <Box className='bBox' gap={2} sx={{ width:{lg:'50%', xs:'100%'} , height: '50%', }} >

        <Box className='sBox' gridColumn="span 3" sx={{ width: '100%', height: '10%', }} >
          <BestSelling />
        </Box>
        <Box className='sBox' gridColumn="span 3" sx={{ width:  '95%', height: '10%', }}>
          <Multicharts />
        </Box>

      </Box>

      <Box className='bBox' gap={1} sx={{ width: '50%', height: '10%', }} >

        <Box className='sBox' sx={{ width: '100%', height: '60%' }}>
          <SalesComparations />
        </Box>

        <Typography
          variant="h6"
          noWrap
          component="p"
          className='text'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Event Galleries
        </Typography>

        <Box className='sBox' 
              sx={{ width: {lg:'100%', xs:'200%'}, 
              height:320}}
               >
           <Swiperchart />
        </Box>


      </Box>

    </Box>
  );
}


export default ContentComp;