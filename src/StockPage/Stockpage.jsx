import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import './stock.css'
import Sidebar from '../Sidebar/Sidebar'
import Mylist from '../components/Mylist'
import { Divider } from '@mui/material'
import Liststock from '../components/Liststock'

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
            <Sidebar />
          </Box>
          <Box
            className='border-right'
            sx={{
              height: '95vh',
              width: '95%',
              backgroundColor: '#222429',
            }}
          >
            <Container sx={{ marginTop: '2rem' }}>
              <Mylist />
              <Divider style={{ background: '#E6E6E7', margin: '10px 0' }} />
              <Liststock />
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Stockpage
