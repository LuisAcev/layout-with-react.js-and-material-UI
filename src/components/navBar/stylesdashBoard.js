import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      notification1: {
        main: '#D9B75F;',
      },
  
      notification2: {
        main: '#647280',
      },
  
    },
  
    components: {
  
      MuiAvatar: {
        styleOverrides: {
          root: {
            borderRadius: '9px',
          },
        },
      },
    },
  });
  
  export const userBox = createTheme({
    palette: {
      notification1: {
        main: 'rgba(238, 255, 243, 0.04)',
      },
  
      notification2: {
        main: '#D3D6E4',
      },
  
    },
  
    components: {
  
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            background: '#24292E',
            borderColor: '#313333',
            borderWidth: '0.08px',
            height: '43px',
  
          },
  
        },
      },
  
      MuiAvatar: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
  
    },
  });
  
  
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
  
            width: '100%',
            height: '40px'
          },
        },
      },
  
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#A4A4A4', // Cambia el color según tus necesidades
          },
        },
      },
  
    },
  });
  
  
  
  export const sattingsIcon = createTheme({
  
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            marginLeft: '10px'
          },
        },
      },
  
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#A4A4A4', 
          },
        },
      },
  
    },
  });
  