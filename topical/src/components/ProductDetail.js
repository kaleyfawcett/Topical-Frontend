import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import List from '@material-ui/core/List'

function ProductDetail ({ result }) {
//   const [name, setName] = useState('')
//   const [imageURL, setimageURL] = useState('')
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  console.log('fromProductdetail:', result)
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <h1>{result.name}</h1>
          )}
        {/* <Typography variant='h4' gutterBottom>
          {results.name}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {results.description}
        </Typography>
        <CardMedia>
          {results.imageURL}
        </CardMedia>
        <List>
          {results.ingredients}
        </List> */}
      </div>
    </Grid>
  )
}

export default ProductDetail
