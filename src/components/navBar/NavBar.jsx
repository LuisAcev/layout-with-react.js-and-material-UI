import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Card, CardMedia, TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { sattingsIcon, theme, userBox, userTextField } from './stylesdashBoard';
import logo from "../../helpers/logo.jpg"
import './dashBoard.css';

export const NavBar = () => {

  return (

    <Box sx= {{width:'100%'}}>
      <AppBar position="sticky" >
        <Toolbar className='navBar'> {/*Se aplican temas personalizados */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Card>
              <CardMedia
                component="img"
                alt="Logo empresa"
                height="50"
                image={ logo }
              />
            </Card>

          </Typography>

          {/* Barra de busqeuda */}
          <ThemeProvider theme={userTextField}>
             <Box sx={{marginLeft:{lg:'4%', xs:'0%'},
                      marginRight:{lg:'3%', xs:'0%'}, 
                      width:{lg:'35%', xs:'100%'} }}>
              <TextField
                variant="outlined"
                placeholder=" Search here"
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                sx={{marginLeft:{lg:'8%', xs:'0%'}, 
                      width:{lg:'100%', xs:'130%'} }}
              />
            </Box>
          </ThemeProvider>

          {/* Sattings Icono */}
          <ThemeProvider theme={sattingsIcon}>
            <Avatar sx={{ bgcolor: '#13B497', display: { xs: 'none', lg: 'block'} }} variant="rounded"  >
              <IconButton  color="inherit" >
                <SettingsIcon sx={{ color: '#FFFFFF' }} />
              </IconButton>
            </Avatar>
          </ThemeProvider>


          <Box sx={{  display: { lg: 'flex', xs:'flex' },
                      flexDirection: 'row',
                      marginLeft: '16%' }}>

            {/* Iconos de notificacion */}

            {/*  notificacion */}
            <ThemeProvider theme={theme}>
              <Box sx={{ display: { xs: 'block', lg: 'block' } }}>
                <Badge badgeContent={''} color='notification1' variant="dot">
                  <Avatar sx={{ bgcolor: '#2F363D', }} variant="rounded" className='borderRadius'>
                    <IconButton size="large" color="inherit">
                      <NotificationsNoneIcon sx={{ color: '#13B497' }} />
                    </IconButton>
                  </Avatar>
                </Badge>
              </Box>
            </ThemeProvider>

            {/*  mensaje */}
            <ThemeProvider theme={theme}>
              <Box marginLeft={'5%'} sx={{  display: { lg: 'flex', xs:'none' }}}>
                <Badge badgeContent={''} color='notification1' variant="dot">
                  <Avatar sx={{ bgcolor: '#2F363D' }} variant="rounded">
                    <IconButton
                      size="large"
                      color="inherit"
                    >
                      <SpeakerNotesIcon sx={{ color: '#13B497' }} />
                    </IconButton>
                  </Avatar>
                </Badge>
              </Box>
            </ThemeProvider>

            {/*  regalo */}

            <ThemeProvider theme={theme}>
              <Box marginLeft={'5%'} sx={{  display: { lg: 'flex', xs:'none' }}}>
                <Badge badgeContent={''} color='notification2' variant="dot">
                  <Avatar sx={{ bgcolor: '#2F363D' }} variant="rounded">
                    <IconButton
                      size="large"
                      color="inherit"
                    >
                      <CardGiftcardIcon sx={{ color: '#8D98A4' }} />
                    </IconButton>
                  </Avatar>
                </Badge>
              </Box>
            </ThemeProvider>

            {/*  User*/}

            <ThemeProvider theme={userBox}>
              <Box marginLeft={'15%'} >
                <Button
                  size="small"
                  aria-haspopup="true"
                  
                  endIcon={<ArrowDropDownIcon color='notification2' />}
                  startIcon={<Avatar/>}
                  >
                  <Typography className='textUserButon'
                              sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Felipe
                  </Typography>

                </Button>
              </Box>
            </ThemeProvider>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}