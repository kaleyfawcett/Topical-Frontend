import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Typography, Grid, Box } from '@material-ui/core'
import BarcodeSearch from './components/BarcodeSearch'
import NameSearch from './components/NameSearch'
import { spacing } from '@material-ui/system'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import About from './components/About'
import Home from './components/Home'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function App () {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/search' component={BarcodeSearch} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
      {/* <Grid container direction='column'>
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
      </Grid> */}

    </div>
  )
}

export default App
