import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import './stock.css'
import Sidebar from '../Sidebar/Sidebar'
import Mylist from '../components/Mylist'
import { Divider } from '@mui/material'
import Liststock from '../components/Liststock'

const Stockpage = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [openSymbol, setOpenSymbol] = React.useState(false)
  const handleOpenSymbol = () => setOpenSymbol(true)
  const handleCloseSymbol = () => setOpenSymbol(false)
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
            <Sidebar
              handleOpen={handleOpen}
              handleOpenSymbol={handleOpenSymbol}
            />
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
              <Liststock
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
              <Divider style={{ background: '#5E5F63', margin: '10px 0' }} />
              <Mylist
                openSymbol={openSymbol}
                setOpenSymbol={setOpenSymbol}
                handleOpenSymbol={handleOpenSymbol}
                handleCloseSymbol={handleCloseSymbol}
              />
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Stockpage
