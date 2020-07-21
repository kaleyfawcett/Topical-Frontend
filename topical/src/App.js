import React from 'react'
import './App.css'
import { Typography, Container, Grid } from '@material-ui/core'
import BarcodeSearch from './components/BarcodeSearch'
// import Login from './components/Login'
// import Registration from './components/Registration'
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
        <Typography variant='h4' gutterBottom>
        To get started, scan a product or enter the UPC:
        </Typography>
        <BarcodeSearch />
        <Typography variant='h4' gutterBottom>
        Or search by product name:
        </Typography>
        <Typography variant='body1' gutterBottom>
        Add name search component
        </Typography>
      </div>
    </Grid>
  )
}

export default App
