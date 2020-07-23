import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

const BarcodeSearch = ({ result }) => {
  const [upc, setUpc] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://shopical.herokuapp.com/api/search?upc=${result}`, {
        upc: upc
      }).then(res => console.log(res))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={result}
          onChange={event => setUpc(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
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

export default BarcodeSearch
