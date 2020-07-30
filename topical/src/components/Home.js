import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import BarcodeSearch from './BarcodeSearch'
import NameSearch from './NameSearch'
import QuaggaDisplay from './QuaggaDisplay'

const Home = ({ setSearchResults }) => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }

  const onSearchResults = (results) => setSearchResults(results)

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
          <QuaggaDisplay onSearchResults={onSearchResults} />
        </Box>
        <Typography variant='h4' gutterBottom>
        Or search by product name:
        </Typography>
        <NameSearch onSearchResults={onSearchResults} />
      </div>
    </Grid>
  )
}

export default Home
