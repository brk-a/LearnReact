import React from 'react'
import GoogleMapReact from 'google-map-react'
import {  useMediaQuery, Paper, Typography } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'

import useStyles from './MapStyles'

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClick}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px')

  // const [childClick, setChildClick] = useState(null)

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB6FkAqOk3xuLRHKnNECF5d_MOZw-QtAT0'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={() => {}}
        onChange={
          (e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng})
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
        onChildClick={(child) => setChildClick(child)}>

          {places?.map((place, i) => (
            <div key={i} className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)}>
              { !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large'/>
              ): (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img className={classes.pointer} alt={place.name} src={place.photo? place.photo.images.large.url : 
  'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}/>
                  <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map