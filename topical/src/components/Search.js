import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import axios from 'axios'

const Search = (props) => {
  const [productName, setProductName] = useState('')
  const [upc, setUpc] = useState(0)

  return (
    <Box>
      <Button raised>Submit</Button>
    </Box>
  )
}
export default Search
