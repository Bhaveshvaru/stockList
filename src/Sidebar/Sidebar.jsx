import React from 'react'
import Box from '@mui/material/Box'
import './sidebar.css'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness5Icon from '@mui/icons-material/Brightness5'

const Sidebar = ({ handleOpen, handleOpenSymbol }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10px',
      }}
    >
      <SearchIcon
        onClick={() => handleOpenSymbol()}
        className='flex-item'
        fontSize='large'
      />
      <AddIcon
        onClick={() => handleOpen()}
        className='flex-item'
        fontSize='large'
      />
      <DarkModeIcon className='flex-item' fontSize='large' />
      <Brightness5Icon className='flex-item' fontSize='large' />
    </Box>
  )
}

export default Sidebar
