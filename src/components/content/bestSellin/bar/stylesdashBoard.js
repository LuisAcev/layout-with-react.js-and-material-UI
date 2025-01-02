import { createTheme } from '@mui/material/styles';

export const userTextField = createTheme({

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            color: '#B9B9B9',
            height: '8px',
            marginLeft: '10px'
          },
          background: '#1C2126',
          border: '1px solid #2F363D',
          borderRadius: '12px',
          width: '700px',
          height: '40px'
        },
      },
    },


  },
});


