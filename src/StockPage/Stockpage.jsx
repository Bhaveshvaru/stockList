import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import './stock.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Stockpage = () => {
  return (
    <Box>
      <Container
        sx={{
          height: '95vh',
          width: '90%',
          marginLeft: '4rem',
        }}
      >
        <Box className='flex'>
          <Box
            className='border-left'
            sx={{
              height: '95vh',
              width: '5%',
              backgroundColor: '#14141A',
              borderRadius: '10px',
            }}
          >

            
          </Box>
          <Box
            className='border-right'
            sx={{
              height: '95vh',
              width: '95%',
              backgroundColor: '#222429',
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Stockpage
