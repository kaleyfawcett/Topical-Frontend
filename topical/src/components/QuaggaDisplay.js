import React, { useState } from 'react'
import Scanner from './Scanner'
import BarcodeSearch from './BarcodeSearch'
import { Button, Box } from '@material-ui/core/'

function QuaggaDisplay () {
  const [camera, setCamera] = useState(false)
  const [result, setResult] = useState(null)

  const onDetected = result => {
    setResult(result)
  }

  return (
    <div>
      <BarcodeSearch result={result} />
      <Box m={6}>
        <Button variant='contained' color='primary' onClick={() => setCamera(!camera)}>
          {camera ? 'Close Camera' : 'Open Scanner'}
        </Button>
      </Box>
      <Box m={6}>
        <div className='container'>
          {camera && <Scanner onDetected={onDetected} />}
        </div>
      </Box>
    </div>
  )
}

export default QuaggaDisplay
