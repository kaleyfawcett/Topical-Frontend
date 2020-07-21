import React from 'react'
// import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const BarcodeSearch = () => {
//   const [upc, setUpc] = useState(0)

  return (
    <div>
      <form>
        <TextField id='outlined-basic' label='Enter 12 digit UPC code' variant='outlined' />
        <IconButton type='submit' className='herego' aria-label='search'>
          <SearchIcon />
        </IconButton>

      </form>
    </div>
  )
}

export default BarcodeSearch
