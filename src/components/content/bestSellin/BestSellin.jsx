import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { TitleBestSellin } from './title/TitleBestSelling';
import { BarBestSelling } from './bar/BarrBestSelling';
import PieChartBestSelling from './charts/PieChart';
import BarCharBestSelling from './charts/BarChart';

export const BestSelling = () => {

  return (
    <Box sx={{ width: '100%', paddingBottom: '3rem ' }}>
      <TitleBestSellin />
      <BarBestSelling />
      <Grid container columnSpacing={1} >
        <Grid xs={6} 
              sx={{ marginLeft: { xs: '12%', lg: '0%'},}}>
          <PieChartBestSelling />
        </Grid>

        <Grid xs={6} 
              sx={{ display: { xs: 'none', lg: 'block'}, 
                    paddingRight: {lg:'1.6rem ',xs:'0'}
                  }} >
          <BarCharBestSelling />
        </Grid>
      </Grid>
    </Box>
  );
}