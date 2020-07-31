import React from 'react'
import { Grid } from '@material-ui/core'

const ProductList = ({ result }) => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh',
    alignItems: 'center'
  }
  console.log(result)
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <div>
              {result.map((item) => (
                <p key={item.id}>
                  {item.name}
                  <img src={item.image_url} />
                </p>))}
            </div>
          )}
      </div>
    </Grid>
  )
}

export default ProductList
