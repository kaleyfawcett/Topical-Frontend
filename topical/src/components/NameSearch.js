import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ProductList from './ProductListPage'

const Search = () => {
  const [productName, setProductName] = useState('')
  const [result, setResult] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://shopical.herokuapp.com/api/search?name=${productName}`, {
        name: productName
      }).then(result => setResult(result))
  }
  // if (result) {
  //   return <ProductList result={result} />
  // } else if (!result) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Enter Product Name:' value={productName}
          onChange={event => setProductName(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton type='submit'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>

    </div>
  )
}

export default Search
