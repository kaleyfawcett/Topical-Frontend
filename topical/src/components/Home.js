import React from 'react'
import { Grid, Typography, Box, CardMedia } from '@material-ui/core'
import NameSearch from './NameSearch'
import QuaggaDisplay from './QuaggaDisplay'
// import Card from '@material-ui/core/Card'
import MediaCard from './MediaCard'

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
        {/* <Typography variant='h2' gutterBottom>
        Topical
        </Typography> */}
        {/* <MediaCard /> */}
        <Box m={4}>
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
