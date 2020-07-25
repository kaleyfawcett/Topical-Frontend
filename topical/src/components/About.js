import React from 'react'
import { Grid } from '@material-ui/core'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function About () {
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        <h1>About</h1>
      </div>
    </Grid>
  )
}

export default About
