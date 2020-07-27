import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BarcodeSearch from './components/BarcodeSearch'
// import NameSearch from './components/NameSearch'
// import { spacing } from '@material-ui/system'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import About from './components/About'
import Home from './components/Home'
import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
import Theme from './components/Theme'

function App () {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/search' component={BarcodeSearch} />
            <Route path='/about' component={About} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>

  )
}

export default App
