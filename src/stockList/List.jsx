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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const StockList = () => {
  const classes = useStyles()
  return (
    <Box sx={{ marginTop: '10px' }}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          sx={{
            height: '23rem',
            zIndex: '1000',
            backgroundColor: '#222429',
            minWidth: 650,
          }}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Symbol</TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Name
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Price
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Market Cap
              </TableCell>
              <TableCell sx={{ color: 'white' }} align='right'>
                Change
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell sx={{ color: '#007FFF' }} component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.calories}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.fat}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.carbs}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align='right'>
                  {row.protein}
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
