import './App.css'
import React from 'react'
import Stockpage from './StockPage/Stockpage'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [toggleDark, settoggleDark] = React.useState(false)
  const myTheme = createTheme({
    palette: {
      type: toggleDark ? 'dark' : 'light',
    },
  })

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Stockpage toggleDark={toggleDark} settoggleDark={settoggleDark} />
      </ThemeProvider>
    </>
  )
}

export default App
