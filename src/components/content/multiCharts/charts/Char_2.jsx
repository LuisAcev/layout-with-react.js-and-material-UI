import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Char2 from "../../../../helpers/char2.jpg"

const CharTw= () => {
  return (

    <CardMedia
    component="img"
    height="194"
    image={ Char2 }
    alt="Char2"
    style={{
                borderRadius: '1rem',
                width: '100%',
                height: 'auto',
                
            }}
    />
  )
}

export default CharTw