import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import './stock.css'
import Sidebar from '../Sidebar/Sidebar'
import Liststock from '../components/Liststock'
import { useTheme } from '@mui/styles'

const Stockpage = ({ toggleDark, settoggleDark }) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [openSymbol, setOpenSymbol] = React.useState(false)
  const handleOpenSymbol = () => setOpenSymbol(true)
  const handleCloseSymbol = () => setOpenSymbol(false)
  return (
    <Box
      className='bgImage'
      sx={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Container
        sx={{
          height: '95vh',
          width: '90%',
          paddingTop: '1rem',
        }}
      >
        <Box className='flex'>
          <Box
            className='border-left'
            sx={{
              height: '95vh',
              width: '5%',
              backgroundColor: `${theme.palette.primary.main}`,
              borderRadius: '10px',
            }}
          >
            <Sidebar
              handleOpen={handleOpen}
              handleOpenSymbol={handleOpenSymbol}
              toggleDark={toggleDark}
              settoggleDark={settoggleDark}
            />
          </Box>
          <Box
            className='border-right'
            sx={{
              height: '95vh',
              width: '95%',
              backgroundColor: `${theme.palette.secondary.main}`,
            }}
          >
            <Container sx={{ marginTop: '2rem' }}>
              <Liststock
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
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
