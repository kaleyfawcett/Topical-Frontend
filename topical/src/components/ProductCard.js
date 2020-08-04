import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

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
      padding: '5vh',
      color: 'secondary'
    },
    media: {
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 200,
      maxHeight: 20
    },
    resultLink: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
})
const classes = styles()

const ProductCard = props => {
  const { name, image, upc } = props

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography>
            <Link
              to={`/product/${upc}/`}
              className={classes.resultLink}
            >
              <div key={upc}>
                <Typography
                  variant='h6'
                >
                  {name}
                </Typography>
                <Typography className={classes.resultLink}>
                  {upc}
                </Typography>
                <CardMedia className={classes.media}>
                  <img src={image} alt={name} />
                </CardMedia>
              </div>
            </Link>
          </Typography>
        </CardContent>
      </Card>
      <Divider variant='middle' />
    </>
  )
}

export default ProductCard
