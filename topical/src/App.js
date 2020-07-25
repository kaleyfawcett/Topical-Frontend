import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BarcodeSearch from './components/BarcodeSearch'
import NameSearch from './components/NameSearch'
// import { spacing } from '@material-ui/system'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import About from './components/About'
import Home from './components/Home'

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

    </div>
  )
}

export default App
