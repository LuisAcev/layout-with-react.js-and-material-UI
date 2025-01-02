import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Char3 from "../../../../helpers/char3.jpg"

const CharT = () => {
  return (

    <CardMedia
    component="img"
    height="194"
    image={ Char3 }
    alt="Char3"
    style={{
                borderRadius: '1rem',
                width: '100%',
                height: 'auto',
                
            }}
    />
  )
}

export default CharT