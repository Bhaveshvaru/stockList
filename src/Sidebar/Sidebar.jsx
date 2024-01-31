import React from 'react'
import Box from '@mui/material/Box'
import './sidebar.css'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

import { useTheme } from '@mui/styles'
const Sidebar = ({
  handleOpen,
  handleOpenSymbol,
  toggleDark,
  settoggleDark,
}) => {
  const themeHandler = () => {
    settoggleDark(!toggleDark)
  }
  const theme = useTheme()
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
        style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
      />
      <AddIcon
        onClick={() => handleOpen()}
        className='flex-item'
        fontSize='large'
        style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
      />
      {toggleDark ? (
        <WbSunnyIcon
          onClick={themeHandler}
          className='flex-item'
          fontSize='large'
          style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
        />
      ) : (
        <DarkModeIcon
          onClick={themeHandler}
          className='flex-item'
          fontSize='large'
          style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
        />
      )}
    </Box>
  )
}

export default Sidebar
