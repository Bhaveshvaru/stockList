import './App.css'
import React from 'react'
import Stockpage from './StockPage/Stockpage'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [toggleDark, settoggleDark] = React.useState(true)

  // Light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#E5E5E5', // Add your primary color for light theme
      },
      secondary: {
        main: '#ffffff', // Add your secondary color for light theme
      },
      typography: {
        main: '#14141A',
      },
      btnBorder: {
        main: '#E6E6E7',
        secondary: '#222429',
      },
    },
  })

  // Dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#14141A', // Add your primary color for dark theme
      },
      secondary: {
        main: '#222429', // Add your secondary color for dark theme
      },
      typography: {
        main: '#ffffff',
      },
      btnBorder: {
        main: '#222429',
        secondary: '#ffffff',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
        <Stockpage toggleDark={toggleDark} settoggleDark={settoggleDark} />
      </ThemeProvider>
    </>
  )
}

export default App
