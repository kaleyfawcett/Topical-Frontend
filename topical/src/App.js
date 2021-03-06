import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BarcodeSearch from './components/BarcodeSearch'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'
import About from './components/About'
import Home from './components/Home'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './components/Theme'
import ProductList from './components/ProductListPage'
import ProductDetail from './components/ProductDetail'

function App ({ result }) {
  const [searchResults, setSearchResults] = useState(null)

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact>
              <Home setSearchResults={setSearchResults} />
            </Route>
            {/* I recommend following the component pattern on line 28 so that it is a bit easier to pass props for the components below             */}
            <Route path='/profile' component={ProfilePage} />
            <Route path='/search'>
              <BarcodeSearch />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/productlist/'>
              <ProductList result={searchResults} />
            </Route>
            <Route path='/product/:upc/'>
              <ProductDetail searchResult={searchResults} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>

  )
}

export default App
