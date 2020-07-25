import React from 'react'
import './App.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Typography, Grid, Box } from '@material-ui/core'
import BarcodeSearch from './components/BarcodeSearch'
import NameSearch from './components/NameSearch'
// import { spacing } from '@material-ui/system'
import Navigation from './components/Navigation'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function App () {
  return (
    <div>
      <Navigation />
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
    </div>
  )
}

export default App
