import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const Mylist = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' gutterBottom color={'white'}>
          My WatchList
        </Typography>
        <Typography variant='subtitle2' gutterBottom color={'#5E5F63'}>
          items 12
        </Typography>
        <Typography variant='subtitle2' gutterBottom color={'#5E5F63'}>
          updated on 22/12/2023
        </Typography>
      </Box>
      <Button
        sx={{
          textTransform: 'lowercase',
          backgroundColor: '#393A3E',
          borderRadius: '5px',
          height: '2.5rem',
          borderColor: '#222429',
          color: '#E6E6E7',
          '&:hover': {
            backgroundColor: '#14141A',
            borderColor: '#222429',
          },
        }}
        variant='outlined'
        startIcon={<AddIcon />}
      >
        add symbols
      </Button>
    </Box>
  )
}

export default Mylist
