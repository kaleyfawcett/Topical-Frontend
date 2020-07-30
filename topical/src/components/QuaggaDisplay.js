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
      <Box m={6}>
        <Button variant='contained' color='primary' onClick={() => setCamera(!camera)}>
          {camera ? 'Close Camera' : 'Open Scanner'}
        </Button>
      </Box>
      <Box m={6}>
        <div className='container'>
          {camera &&
            <div>
              <BarcodeSearch onSearchResults={onSearchResults} quaggaResult={quaggaResult} />
              <Scanner onDetected={onDetected} />
            </div>}
        </div>
      </Box>
    </div>
  )
}

export default QuaggaDisplay
