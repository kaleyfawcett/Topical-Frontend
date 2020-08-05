import React, { useState } from 'react'
import Scanner from './Scanner'
import BarcodeSearch from './BarcodeSearch'
import { Button, Box } from '@material-ui/core/'

function QuaggaDisplay ({ onSearchResults }) {
  const [camera, setCamera] = useState(false)
  const [quaggaResult, setQuaggaResult] = useState('')

  const onDetected = result => {
    setQuaggaResult(result)
  }

  return (
    <div>
      <Box m={7}>
        <Button variant='contained' color='primary' size='large' onClick={() => setCamera(!camera)}>
          {camera ? 'Close Camera' : 'Open Scanner'}
        </Button>
      </Box>
      <Box m={5}>
        <div className='container'>
          {camera &&
            <div>
              <BarcodeSearch onSearchResults={onSearchResults} quaggaResult={quaggaResult} />
              <br />
              <Scanner onDetected={onDetected} />
            </div>}
        </div>
      </Box>
    </div>
  )
}

export default QuaggaDisplay
