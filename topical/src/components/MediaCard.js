import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight: 150,
    display: 'flex',
    justifyContent: 'center'
  },
  media: {
    height: 100,
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    alignItems: 'center',
    justify: 'center',
    display: 'inline-block'
  }
})

export default function MediaCard () {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://i.imgur.com/eZjwKsY.png'
          title='logo'
        />
      </CardActionArea>
    </Card>
  )
}
