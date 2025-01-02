import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Char1 from "../../../../helpers/char1.jpg"

const CharO = () => {
    return (

        <CardMedia
            component="img"
            height="194"
            image={Char1}
            alt="Char1"
            style={{
                borderRadius: '1rem',
                width: '100%',
                height: 'auto',
                   }}
        />

    )
}

export default CharO