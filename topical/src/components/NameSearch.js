import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Search = ({ onSearchResults }) => {
  const [productName, setProductName] = useState('')
  const [result, setResult] = useState()
  const [toProductList, setToProductList] = useState(false)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const result = await axios
        .get(`https://shopical.herokuapp.com/api/search?name=${productName}`, {
          name: productName
        })
      setResult(result.data.results)
      setToProductList(true)
      onSearchResults(result.data.results)
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Search' value={productName}
          onChange={event => setProductName(event.target.value)}
          inputProps={{ 'aria-label': 'Enter search word here' }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton type='submit' aria-label='submit button'>
                  <SearchIcon color='inherit' />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
      {toProductList
        ? <Redirect to='/productlist/' />
        : null}
    </div>
  )
}
export default Search
