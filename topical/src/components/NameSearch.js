import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import axios from 'axios'

const Search = (props) => {
  const [productName, setProductName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://shopical.herokuapp.com/api/search?name=${productName}`, {
        name: productName
      }).then(res => res.product)
  }

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
