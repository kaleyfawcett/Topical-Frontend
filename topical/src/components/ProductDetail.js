import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetail ({ searchResult }) {
  const { upc } = useParams()
  const [ingredients, setIngredients] = useState([])
  const [violations, setViolations] = useState([])
  const [image, setImage] = useState('')
  const [name, setName] = useState('')

  const styles = muiBaseTheme => ({
    card: {
      maxWidth: 300,
      margin: 'auto',
      transition: '0.3s',
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
      },
      heading: {
        fontWeight: 'bold'
      },
      content: {
        textAlign: 'left',
        padding: '5vh'
      },
      media: {
        padding: '5vh',
        display: 'center'
      }
    }
  })
  const classes = styles()

  useEffect(() => {
    if (searchResult) {
      getDetails()
    }
  }, [searchResult, upc]
  )

  const getDetails = async () => {
    try {
      const result = await axios
        .get(`https://shopical.herokuapp.com/api/product/${upc}/ingredients/`, {
          headers: {
            Authorization: 'Token 29174f9636c35eb521cb2ee74e7558dd5ecb3486'
          }
        })
      console.log(result)
      setName(result.data.name)
      setImage(result.data.image_url)
      setIngredients(result.data.ingredient_list)
      setViolations(result.data.violations)
      console.log(ingredients)
      console.log(violations)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography
          className='heading'
          variant='h6'
          gutterBottom
        >
          {name}
        </Typography>
        <CardMedia className={classes.media}>
          <img src={image} alt={name} />
        </CardMedia>
        <Typography
          className='heading'
          variant='h6'
        >
          Common Irritants:
        </Typography>
        <Typography
          color='error'
        >
          {violations.map((item, idx) => [
            idx > 0 && ', ',
            <span key={idx}>{item}</span>
          ])}
        </Typography>
        <Typography
          className='heading'
          variant='h6'
        >
          Full Ingredients:
        </Typography>
        <Typography>
          {ingredients.map((item, idx) => [
            idx > 0 && ', ',
            <span key={idx}>{item.name}</span>
          ])}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductDetail
