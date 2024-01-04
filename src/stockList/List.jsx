import React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    boxShadow: 'none',
  },
})
const getRowStyle = (row) => {
  // Assuming row.priceChange is a property indicating the change in price
  return {
    color: row.price > 0 ? 'green' : row.price < 0 ? 'red' : 'white',
  }
}

const StockList = ({ socketData }) => {
  // Function to convert WebSocket data to the format expected by the Material-UI table
  const createData = (symbol, price, timestamp, exchange, currency_quote) => ({
    symbol,
    price,
    timestamp,
    exchange,
    currency_quote,
  })

  const rows = socketData.map(
    ({ symbol, price, timestamp, exchange, currency_quote }) =>
      createData(symbol, price, timestamp, exchange, currency_quote)
  )
  rows.shift()

  const classes = useStyles()
  return (
    <Box sx={{ marginTop: '10px' }}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          sx={{
            height: '23rem',
            zIndex: '1000',
            backgroundColor: 'rgba(148, 187, 233, 1)',
            minWidth: 650,
          }}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Symbol</TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Price
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Timestamp
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Exchange
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Currency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell sx={{ color: '#007FFF' }} component='th' scope='row'>
                  {row.symbol}
                </TableCell>
                <TableCell
                  sx={{ color: 'white' }}
                  align='right'
                  style={getRowStyle(row)}
                >
                  {row.price}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {new Date(row.timestamp * 1000).toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.exchange}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.currency_quote}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StockList
