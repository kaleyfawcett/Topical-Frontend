import React from 'react'
import Card from '@material-ui/core/Card'
import ProductCard from './ProductCard'

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
  }
})
const classes = styles()
const ProductList = ({ result }) => {
  console.log(result)
  return (
    <Card className={classes.card}>
      <div>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <div>
              {result.map((item) => {
                return (
                  <ProductCard
                    key={item.upc}
                    name={item.name}
                    image={item.image_url}
                    upc={item.upc}
                  />
                )
              }

              )}
            </div>
          )}
      </div>
    </Card>
  )
}

export default ProductList
