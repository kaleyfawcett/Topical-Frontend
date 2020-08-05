import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ProductCard from './ProductCard'

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    },
    content: {
      textAlign: 'center',
      padding: '5vh'
    }
  }
})
const classes = styles()
const ProductList = ({ result }) => {
  console.log(result)
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div>
          <Typography>
            {!result
              ? (
                <Typography
                  variant='h4'
                >
                No results found
                </Typography>
              )
              : (
                <div>
                  <Typography
                    variant='h5'
                  >
                    Results
                  </Typography>
                  <br />
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
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductList
