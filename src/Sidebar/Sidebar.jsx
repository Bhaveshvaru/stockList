import React from 'react'
import Box from '@mui/material/Box'
import './sidebar.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness5Icon from '@mui/icons-material/Brightness5'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'



const Sidebar = () => {
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
      <MenuIcon className='flex-item' fontSize='large' />
      <SearchIcon className='flex-item' fontSize='large' />
      <AddIcon className='flex-item' fontSize='large' />
      <DarkModeIcon className='flex-item' fontSize='large' />
      <Brightness5Icon className='flex-item' fontSize='large' />
      <AccountCircleIcon className='flex-item' fontSize='large' />
      
    </Box>
  )
}

export default Sidebar
