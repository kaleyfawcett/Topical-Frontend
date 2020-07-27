import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import List from '@material-ui/core/List'

function Product (props) {
//   const [name, setName] = useState('')
//   const [imageURL, setimageURL] = useState('')
  const product = this.props.product

  return (
    <Grid container direction='column'>
      <div>
        <Typography variant='h4' gutterBottom>
          {product.name}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {product.description}
        </Typography>
        <CardMedia>
          {product.imageURL}
        </CardMedia>
        <List>
          {product.ingredients}
        </List>
      </div>
    </Grid>
  )
}

export default Product
