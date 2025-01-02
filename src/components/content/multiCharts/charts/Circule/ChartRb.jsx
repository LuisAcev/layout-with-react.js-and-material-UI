
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Graph } from './Graph';
import CharF from '../Char_4';

export const ChartRb = () => {

    return (

        <Grid container rowSpacing={1} 
              sx={{ background:'#2F363D', 
                    borderRadius:'1rem', 
                    height:{lg:'100%', xs:'120%'}
                  }}>

            <Grid  sx={{marginLeft: {xs:'30%', lg:'0%'}, }}>
              <Graph /> 
            </Grid>

            <Grid xs={6} sx={{display: { xs: 'none', lg: 'block'}}}>
               <CharF /> 
            </Grid>

        </Grid>

    );
}