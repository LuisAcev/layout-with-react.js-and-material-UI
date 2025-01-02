
import * as React from 'react';
import CharO from './charts/Char_1';
import CharTw from './charts/Char_2';
import Chart from './charts/Char_3';
import { ChartRb } from './charts/Circule/ChartRb';
import { Box } from '@mui/material';

export const Multicharts = () => {

    return (

        <Box 
            columnGap={3}
            sx={{   background: '#24292E', 
                    display: { lg: 'grid', xs:'grid' }, 
                    gridTemplateColumns:{ lg:"repeat(2, 50%)", xs:"repeat(1, 105%)" }
                }}
            rowGap={3}
            >
            <CharO />

            <CharTw />

            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Chart />
            </Box>
            <Box>
                <ChartRb />
            </Box>
             
           
        </Box>

    );
}