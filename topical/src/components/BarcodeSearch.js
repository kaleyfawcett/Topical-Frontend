import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

const BarcodeSearch = () => {
  const [upc, setUpc] = useState('')
  //   const [name, setName] = useState('')
  //   const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get(`https://shopical.herokuapp.com/api/search?upc=${upc}`, {
        upc: upc
      }).then(res => res.product)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Enter 12 digit UPC code' value={upc}
          onChange={event => setUpc(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
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
