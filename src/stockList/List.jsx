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
import { useTheme } from '@mui/material'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    boxShadow: 'none',
  },
  noBottomBorder: {
    borderBottom: 'none',
  },
})

const StockList = ({ socketData }) => {
  // Function to convert WebSocket data to the format expected by the Material-UI table
  const createData = (symbol, price, timestamp, exchange, currency_quote) => ({
    symbol,
    price,
    timestamp,
    exchange,
    currency_quote,
  })
  const theme = useTheme()
  let rows = socketData.map(
    ({ symbol, price, timestamp, exchange, currency_quote }) =>
      createData(
        symbol ? symbol : 'N/A',
        price ? price : 'N/A',
        timestamp ? timestamp : 'N/A',
        exchange ? exchange : 'N/A',
        currency_quote ? currency_quote : 'N/A'
      )
  )

  if (socketData[0]) {
    rows = [
      ...rows,
      ...socketData[0].fails.map(
        ({ symbol, price, timestamp, exchange, currency_quote }) =>
          createData(
            symbol ? symbol : 'N/A',
            price ? price : 'N/A',
            timestamp ? timestamp : 'N/A',
            exchange ? exchange : 'N/A',
            currency_quote ? currency_quote : 'N/A'
          )
      ),
    ]
  }

  rows.shift()
  rows.pop()

  const classes = useStyles()
  return (
    <Box sx={{ marginTop: '10px' }}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          sx={{
            height: '23rem',
            zIndex: '1000',
            backgroundColor:
              theme.palette.mode === 'dark' ? '#14141A' : '#E5E5E5',
            minWidth: 650,
          }}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                }}
              >
                Symbol
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                }}
                align='right'
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                }}
                align='right'
              >
                Timestamp
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                }}
                align='right'
              >
                Exchange
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                }}
                align='right'
              >
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
                <TableCell
                  sx={{
                    color:
                      theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                  }}
                  component='th'
                  scope='row'
                >
                  {row.symbol}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                  }}
                  align='right'
                >
                  {row.price}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                  }}
                  align='right'
                >
                  {new Date(row.timestamp * 1000).toLocaleString() ===
                  'Invalid Date'
                    ? 'N/A'
                    : new Date(row.timestamp * 1000).toLocaleString()}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                  }}
                  align='right'
                >
                  {row.exchange}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      theme.palette.mode === 'light' ? '#14141A' : '#E5E5E5',
                  }}
                  align='right'
                >
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
