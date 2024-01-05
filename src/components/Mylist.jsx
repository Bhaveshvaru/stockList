import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Autocomplete, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import StockList from '../stockList/List'
import { useTheme } from '@mui/styles'
import './btn.css'

const Mylist = ({
  openSymbol,
  setOpenSymbol,
  handleOpenSymbol,
  handleCloseSymbol,
}) => {
  const theme = useTheme()

  const [symbolData, setSymbolData] = useState([])
  const [symbol, setSymbol] = useState(',EUR/USD,BTC/USD,')
  const [socketData, setSocketData] = useState([])

  const changeHandler = (e) => {
    const fetchData = async () => {
      try {
        if (symbol !== '') {
          const response = await axios.get(
            `https://api.twelvedata.com/stocks?apikey=d89fd760bbff49ff9f01c797a6c54b05`,
            {
              params: {
                symbol: e.target.value,
              },
            }
          )
          const updatedData = response.data.data.map((item) => {
            const updatedItem = {}
            updatedItem.label = `${item.symbol}  -  ${item.name}`
            updatedItem.year = item.symbol
            return updatedItem
          })
          setSymbolData(updatedData)
        }
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }

  const symbolAddHandler = () => {
    setSymbol((prevText) => prevText + `,${symbolData[0].year}`)

    handleCloseSymbol()
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
      const newData = JSON.parse(event.data)

      // Check if the new data is different from the existing data
      setSocketData((prevData) => {
        const index = prevData.findIndex(
          (item) => item.symbol === newData.symbol
        )

        if (index !== -1) {
          // If the symbol is already present, update the record
          const updatedData = [...prevData]
          updatedData[index] = newData
          return updatedData
        } else {
          // If the symbol is not present, add the new record
          return [...prevData, newData]
        }
      })
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

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 580,
    bgcolor: theme.palette.mode === 'light' ? '#ffffff' : '#222429',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1.2rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant='h5'
            gutterBottom
            style={{ color: `${theme.palette.typography.main}` }}
          >
            My WatchList
          </Typography>
          {/* <Typography variant='subtitle2' gutterBottom color={'#5E5F63'}>
            items 12
          </Typography>
          <Typography variant='subtitle2' gutterBottom color={'#5E5F63'}>
            updated on 22/12/2023
          </Typography> */}
        </Box>
        <Button
          sx={{
            marginTop: 3,
            marginRight: 5,
            textTransform: 'lowercase',
            backgroundColor:
              theme.palette.mode === 'light' ? '#E5E5E5' : '#393A3E',
            borderRadius: '50px',
            height: '2.5rem',
            borderColor: theme.palette.mode === 'dark' ? '#222429' : '',
            color: theme.palette.mode === 'dark' ? '#E6E6E7' : '#393A3E',
            marginLeft: '10px',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark' ? '#14141A' : '#E5E5E5',
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
          onClick={handleOpenSymbol}
        >
          add symbols
        </Button>
        <Modal
          open={openSymbol}
          onClose={handleCloseSymbol}
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
                style={{ color: `${theme.palette.typography.main}` }}
              >
                Search Symbols
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Stack spacing={2} sx={{ width: 400, mt: 5 }}>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={symbolData}
                  sx={{
                    width: 300,
                    backgroundColor:
                      theme.palette.mode === 'light' ? '#E6E6E7' : '#393A3E',
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Stocks'
                      onChange={changeHandler}
                      InputLabelProps={{
                        style: {
                          color:
                            theme.palette.mode === 'dark'
                              ? '#E6E6E7'
                              : '#393A3E',
                        },
                      }}
                    />
                  )}
                />
              </Stack>
              <Button
                sx={{
                  textTransform: 'lowercase',

                  borderRadius: '50px',
                  height: '3.5rem',
                  backgroundColor:
                    theme.palette.mode === 'light' ? '#E5E5E5' : '#393A3E',
                  borderColor: theme.palette.mode === 'dark' ? '#222429' : '',
                  color: theme.palette.mode === 'dark' ? '#E6E6E7' : '#393A3E',
                  marginLeft: '10px',
                  marginTop: '30px',
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor:
                      theme.palette.mode === 'dark' ? '#14141A' : '#E5E5E5',
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
          </Box>
        </Modal>
      </Box>
      <StockList socketData={socketData} />
    </>
  )
}

export default Mylist
