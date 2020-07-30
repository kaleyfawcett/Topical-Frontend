import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    maxWidth: 145,
    display: 'flex'
  },
  media: {
    height: 40,
    display: 'flex',
    justifyContent: 'center'
  }
  // img: {
  //   alignItems: 'center',
  //   justify: 'center',
  //   display: 'inline-block'
  // }
})

export default function MediaCard () {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://haenfler.sites.grinnell.edu/wp-content/uploads/2017/12/Picture-111.png'
          title='barcode'
        />
      </CardActionArea>
    </Card>
  )
}
