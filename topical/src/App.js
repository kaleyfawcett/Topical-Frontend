import React from 'react'
import './App.css'
import { Typography, Grid, Box } from '@material-ui/core'
import BarcodeSearch from './components/BarcodeSearch'
import NameSearch from './components/NameSearch'
import { spacing } from '@material-ui/system'
import QuaggaDisplay from './components/QuaggaDisplay'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function App () {
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        <Typography variant='h2' gutterBottom>
        Topical
        </Typography>
        <Box m={6}>
          <Typography variant='h4' gutterBottom>
        To get started, scan a product or enter the UPC:
          </Typography>
          <BarcodeSearch />
        </Box>
        <Typography variant='h4' gutterBottom>
        Or search by product name:
        </Typography>
        <NameSearch />
      </div>
    </Grid>
  )
}

export default App
