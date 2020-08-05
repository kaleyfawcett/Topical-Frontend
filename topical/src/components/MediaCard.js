import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    // maxWidth: 250,
    // maxHeight: 150
    // display: 'flex'
    // justifyContent: 'center'
  },
  image: {
    maxHeight: 80

  }
})

export default function MediaCard () {
  const classes = useStyles()

  return (
    <img src='https://i.imgur.com/eZjwKsY.png' className={classes.image} alt='Topical logo' />

  )
}
