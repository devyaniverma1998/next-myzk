import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

const ExtraBanner = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0'
      }}
    >
      <Container>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Box textAlign='center'>
            <Typography variant='h5' sx={{ textTransform: 'uppercase', mb: 4 }}>
              Quality Products
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: 'uppercase', // Ensure text is uppercase
                fontWeight: 600, // Adjust font weight as needed
              }}
            >
               40% Off
            </Typography>
            <Button
              variant='contained'
              color='warning'
              sx={{
                mb: 2,
                mt: 2,
                backgroundColor: '#2563eb !important', // Set background color to #2563eb
                color: 'white', // Set text color to white
                '&:hover': {
                  backgroundColor: '#2563eb !important', // Keep the background color #2563eb on hover
                  color: 'black' // Change text color to black on hover
                }
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default ExtraBanner
