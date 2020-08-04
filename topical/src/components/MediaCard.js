import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight: 150,
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    maxHeight: 100

  }
})

export default function MediaCard () {
  const classes = useStyles()

  return (
    <img src='https://i.imgur.com/eZjwKsY.png' className={classes.image} />

  )
}
