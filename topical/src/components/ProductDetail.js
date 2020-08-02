import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetail ({ searchResult }) {
  const { upc } = useParams()
  const [ingredients, setIngredients] = useState([])
  const [violations, setViolations] = useState([])

  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }

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
      setIngredients(result.data.ingredient_list)
      setViolations(result.data.violations)
      console.log(ingredients)
      console.log(violations)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Grid container direction='column'>
      <div style={containerStyles} />
    </Grid>
  )
}

export default ProductDetail
