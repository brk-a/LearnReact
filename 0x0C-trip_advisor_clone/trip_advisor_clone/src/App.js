import React, {useEffect, useState} from "react";
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData } from "./api";

import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {

  const [places, setplaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  })

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setplaces(data)
        console.log(data)
      })
  }, [bounds, coordinates])

  return(
    <>
      <CssBaseline/>

      <Header/>

      <Grid container spacing={3} style={{width: '100%'}}>
        
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Map setBounds={setBounds} setCoordinates={setCoordinates} coordinates={coordinates}/>
        </Grid>
        
      </Grid>
    </>
  )
}

export default App