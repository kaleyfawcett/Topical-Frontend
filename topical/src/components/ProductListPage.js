import React from 'react'
import { Grid } from '@material-ui/core'

const ProductList = ({ searchResults }) => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!searchResults ? (
          <h1>No results found</h1>
        ) : (<h1>{searchResults[0].name}</h1>)}
      </div>
    </Grid>
  )
}

export default ProductList
