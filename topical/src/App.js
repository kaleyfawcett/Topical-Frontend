import React from 'react'
import './App.css'
import Search from './components/Search'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// import Login from './components/Login'
// import Registration from './components/Registration'

function App () {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h2' gutterBottom>
        Topical
      </Typography>
      <Typography variant='h4' gutterBottom>
        To get started, scan a product:
      </Typography>
      <Typography variant='body1' gutterBottom>
        Add barcode component
      </Typography>
      <Typography variant='h4' gutterBottom>
        Or search by product name:
      </Typography>
      <Typography variant='body1' gutterBottom>
        Add name search component
      </Typography>
    </Container>
  )
}

export default App
