import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Autocomplete, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import axios from 'axios'

const Mylist = () => {
  const [symbolData, setSymbolData] = useState([])
  const [symbol, setSymbol] = useState('')

  const changeHandler = (e) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.twelvedata.com/stocks?apikey=d89fd760bbff49ff9f01c797a6c54b05`,
          {
            params: {
              symbol: e.target.value,
            },
          }
        )
        console.log(response.data)
        const updatedData = response.data.data.map((item) => {
          const updatedItem = {}
          updatedItem.label = item.symbol
          updatedItem.year = item.name
          return updatedItem
        })
        setSymbolData(updatedData)
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }

  const symbolAddHandler = () => {
    setSymbol((prevText) => prevText + `,${symbolData[0].label}`)

    handleClose()
  }
  useEffect(() => {
    // Define the WebSocket endpoint
    const socketEndpoint = `wss://ws.twelvedata.com/v1/quotes/price?apikey=d89fd760bbff49ff9f01c797a6c54b05`

    // Create a new WebSocket instance
    const socket = new WebSocket(socketEndpoint)

    // Define the message to be sent
    const subscribeMessage = JSON.stringify({
      action: 'subscribe',
      params: {
        symbols: symbol.substring(1),
      },
    })
    console.log('subscribeMessage', subscribeMessage)

    // Handle the WebSocket connection opening
    socket.onopen = () => {
      console.log('WebSocket connection opened')

      // Send the subscribe message when the connection is open
      socket.send(subscribeMessage)
    }

    // Handle messages received from the WebSocket server
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data)
      console.log('Received data:', receivedData)
      // Process the received data as needed
    }

    // Handle errors that occur.
    socket.onerror = (error) => {
      console.error('WebSocket Error:', error)
    }

    // Handle the WebSocket connection closing
    socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event)

      // You may want to attempt to reconnect here if needed
    }

    // Clean up the WebSocket connection when the component is unmounted
    return () => {
      console.log('Cleaning up WebSocket connection')
      socket.close()
    }
  }, [symbol])

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

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.2rem',
      }}
    >
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
        onClick={handleOpen}
      >
        add symbols
      </Button>
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
              Search Symbols
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
              onClick={symbolAddHandler}
            >
              Add New Symbols
            </Button>
          </Box>

          <Stack spacing={2} sx={{ width: 400, mt: 5 }}>
            <Autocomplete
              disablePortal
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
              id='combo-box-demo'
              options={symbolData}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Stocks'
                  onChange={changeHandler}
                  InputLabelProps={{
                    style: {
                      color: 'white',
                    },
                  }}
                />
              )}
            />
            {/* <WhiteBorderTextField
              onChange={changeHandler}
              sx={{
                borderColor: 'white',
                '&:hover fieldset': {
                  borderColor: 'green', // Change the border color on hover as needed
                },
              }}
              variant='outlined'
              label='Search Symbols'
              InputLabelProps={{
                style: {
                  color: 'white',
                },
              }}
            /> */}
          </Stack>
        </Box>
      </Modal>
    </Box>
  )
}

export default Mylist
