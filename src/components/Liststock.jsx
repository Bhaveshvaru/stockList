import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

const Liststock = () => {
  const [watchState, setWatchState] = useState([
    { name: 'WinnerList', id: 2, selected: false },
    { name: 'Tech List', id: 3, selected: true },
  ])

  const [watchlistName, setWatchlistName] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#222429',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  }

  const handleListUpdate = () => {
    if (watchlistName === '') {
      window.alert('Please add Name in the field!!!')
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: watchlistName,
        selected: false,
      }
      setWatchState((prevState) => [...prevState, newItem])
      setWatchlistName('')
      handleClose()
    }
  }

  const handleClick = (list) => {
    let arr = watchState
    arr.map((item) => {
      list.id === item.id ? (item.selected = true) : (item.selected = false)
      return arr
    })
    setWatchState(() => [...arr])
  }

  const inputRef = useRef()
  const handleInputChange = (event) => {
    event.preventDefault()
    const { value } = event.target
    setWatchlistName(value)
  }

  return (
    <Box>
      <Typography variant='h5' gutterBottom color={'white'}>
        WatchLists
      </Typography>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '1.5rem',
          }}
        >
          {watchState &&
            watchState.map((item) => {
              return (
                <Button
                  key={item.id}
                  sx={{
                    marginLeft: '0.6rem',
                    textTransform: 'lowercase',
                    backgroundColor: '#393A3E',
                    borderRadius: '50px',
                    height: '2.5rem',
                    borderColor: item.selected ? '#E6E6E7' : '#222429',
                    color: '#E6E6E7',
                    '&:hover': {
                      backgroundColor: '#14141A',
                      borderColor: '#222429',
                    },
                  }}
                  variant='outlined'
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </Button>
              )
            })}
        </Box>

        <Button
          sx={{
            marginTop: 3,
            marginRight: 5,
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
          onClick={handleOpen}
        >
          Create new watchlist
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              color={'white'}
            >
              Create WatchList
            </Typography>

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
              onClick={handleListUpdate}
            >
              Create a new watchlist
            </Button>
          </Box>

          <Stack spacing={2} sx={{ width: 400, mt: 5 }}>
            <TextField
              autoComplete='off'
              onChange={handleInputChange}
              value={watchlistName}
              inputRef={inputRef}
              sx={{
                borderColor: 'white',
                '&:hover fieldset': {
                  borderColor: 'green', // Change the border color on hover as needed
                },
              }}
              variant='outlined'
              label='Add WatchList Name'
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
            />
          </Stack>
        </Box>
      </Modal>
    </Box>
  )
}

export default Liststock
