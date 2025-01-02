import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import salesComparation from "../../../helpers/salesComparation.jpg"

const SalesComparations = () => {
  return (

    <CardMedia

    component="img"
    height="194"
    image={ salesComparation }
    alt="Paella dish"
    sx={{ display: { xs: 'none', lg: 'block'} }}
    style={{
                width: '100%',
                height: 'auto',
            }}
    />
  )
}

export default SalesComparations