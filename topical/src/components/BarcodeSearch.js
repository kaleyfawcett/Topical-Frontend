import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

const BarcodeSearch = ({ quaggaResult, onSearchResults }) => {
  const [searchResult, setSearchResult] = useState()
  const [toProductDetail, setToProductDetail] = useState(false)

  const handleSubmit = async (event) => {
    try {
      console.log(quaggaResult)
      event.preventDefault()
      const result = await axios
        .get(`https://shopical.herokuapp.com/api/search?upc=${quaggaResult}`, {
          headers: {
            Authorization: 'Token 29174f9636c35eb521cb2ee74e7558dd5ecb3486'
          }
        })
      console.log('result from request: ', result.data)
      setSearchResult(result.data)
      setToProductDetail(true)
      onSearchResults(result.data)
      console.log('result stored in state:', searchResult)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={quaggaResult}
          // onChange={event => setUpc(event.target.value)}
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
