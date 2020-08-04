import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
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
        <Box m={4}>
          <Typography variant='h5' gutterBottom>
            {/* To get started, scan a product or enter the UPC: */}
        Open scanner to check a product’s ingredients:
          </Typography>
          <QuaggaDisplay onSearchResults={onSearchResults} />
        </Box>
        <Typography variant='h5' gutterBottom>
        Or search by product name, ingredients, or category:
        </Typography>
        <NameSearch onSearchResults={onSearchResults} />
      </div>
    </Grid>
  )
}

export default Home
