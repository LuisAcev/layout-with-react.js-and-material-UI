import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Char4 from "../../../../helpers/char4.jpg"

const CharF = () => {
  return (

    <CardMedia
    component="img"
    height="194"
    image={ Char4 }
    alt="Char4"
    style={{
                borderRadius: '1rem',
                width: '100%',
                height: 'auto',
                padding: '0px'
                
            }}
          sx={{display: { xs: 'none', lg: 'block'}}}

    />
  )
}

export default CharF