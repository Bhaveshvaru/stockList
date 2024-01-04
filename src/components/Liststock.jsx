import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/styles'
import './btn.css'

const Liststock = ({ open, setOpen, handleOpen, handleClose }) => {
  const theme = useTheme()
  const [watchState, setWatchState] = useState([
    { name: 'WinnerList', id: 2, selected: false },
    { name: 'Tech List', id: 3, selected: true },
    { name: 'Penny stocks', id: 4, selected: false },
  ])

  const [watchlistName, setWatchlistName] = useState('')

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
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
      <Typography
        variant='h5'
        gutterBottom
        color={'white'}
        style={{ color: `${theme.palette.typography.main}` }}
      >
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
                  style={{
                    marginLeft: '0.6rem',
                    textTransform: 'lowercase',
                    backgroundColor:
                      theme.palette.mode === 'light' ? '#E5E5E5' : '#393A3E',
                    borderRadius: '50px',
                    height: '2.5rem',
                    borderColor: item.selected
                      ? `${theme.palette.btnBorder.secondary}`
                      : `${theme.palette.btnBorder.main}`,

                    color:
                      theme.palette.mode === 'dark' ? '#E6E6E7' : '#393A3E',
                    '&:hover': {
                      backgroundColor: '#14141A',
                      borderColor: item.selected ? '#E6E6E7' : '#222429',
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
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(148, 187, 233, 1)'
                : '#393A3E',
            borderRadius: '50px',
            height: '2.5rem',
            borderColor: theme.palette.mode === 'dark' ? '#222429' : '',
            color: theme.palette.mode === 'dark' ? '#E6E6E7' : '#393A3E',
            marginLeft: '10px',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? '#14141A'
                  : 'rgba(148, 187, 233, 1)',
            },
          }}
          variant='outlined'
          startIcon={
            <AddIcon
              className={`${
                theme.palette.mode === 'dark' ? 'btnWhite' : 'btnBlack'
              } `}
            />
          }
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
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Stack spacing={2} sx={{ width: 400, mt: 5 }}>
              <TextField
                autoComplete='off'
                type='text'
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
            <Button
              sx={{
                textTransform: 'lowercase',
                backgroundColor: '#393A3E',
                borderRadius: '50px',
                height: '3.5rem',
                borderColor: '#222429',
                color: '#E6E6E7',
                marginLeft: '10px',
                marginTop: '30px',
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: '#14141A',
                  borderColor: '#222429',
                },
              }}
              variant='outlined'
              startIcon={<AddIcon />}
              onClick={handleListUpdate}
            >
              Create new watchlist
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default Liststock
