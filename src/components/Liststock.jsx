import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const Liststock = () => {
  return (
    <Box>
      <Typography variant='h5' gutterBottom color={'white'}>
        WatchLists
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '1.5rem',
        }}
      >
        <Button
          sx={{
            textTransform: 'lowercase',
            backgroundColor: '#393A3E',
            borderRadius: '50px',
            height: '2.5rem',
            borderColor: '#222429',
            color: '#E6E6E7',
            '&:hover': {
              backgroundColor: '#14141A',
              borderColor: '#222429',
            },
          }}
          variant='outlined'
        >
          My techlist #1
        </Button>
        <Button
          sx={{
            textTransform: 'lowercase',
            backgroundColor: '#393A3E',
            borderRadius: '50px',
            height: '2.5rem',
            borderColor: '#222429',
            color: '#E6E6E7',
            marginLeft: '10px',
            '&:hover': {
              backgroundColor: '#14141A',
              borderColor: '#222429',
            },
          }}
          variant='outlined'
        >
          winnerlist
        </Button>
        <Button
          sx={{
            textTransform: 'lowercase',
            backgroundColor: '#393A3E',
            borderRadius: '50px',
            height: '2.5rem',
            borderColor: '#222429',
            color: '#E6E6E7',
            marginLeft: '10px',
            '&:hover': {
              backgroundColor: '#14141A',
              borderColor: '#222429',
            },
          }}
          variant='outlined'
          startIcon={<AddIcon />}
        >
          Create new watchlist
        </Button>
      </Box>
    </Box>
  )
}

export default Liststock
