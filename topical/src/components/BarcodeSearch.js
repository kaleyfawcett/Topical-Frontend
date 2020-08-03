import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Redirect } from 'react-router-dom'

const BarcodeSearch = ({ quaggaResult, onSearchResults }) => {
  const [searchResult, setSearchResult] = useState()
  const [toProductDetail, setToProductDetail] = useState(false)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const result = await axios
        .get(`https://shopical.herokuapp.com/api/search?upc=${quaggaResult}`, {
          headers: {
            Authorization: 'Token 29174f9636c35eb521cb2ee74e7558dd5ecb3486'
          }
        })
      setSearchResult(result.data)
      setToProductDetail(true)
      onSearchResults(result.data)
      console.log('in barcode search:', result.data)
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
      {toProductDetail
        ? <Redirect to={`/product/${quaggaResult}`} />
        : null}
    </div>
  )
}

export default BarcodeSearch
