import React, {useEffect, useState} from "react";
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData } from "./api";

import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClick, setChildClick] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)

    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
      })
  }, [coordinates, bounds])

  return(
    <>
      <CssBaseline/>

      <Header/>

      <Grid container spacing={3} style={{width: '100%'}}>
        
        <Grid item xs={12} md={4}>
          <List places={places} childClick={childClick} isLoading={isLoading}/>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Map setChildClick={setChildClick} setBounds={setBounds} setCoordinates={setCoordinates} coordinates={coordinates} places={places}/>
        </Grid>
        
      </Grid>
    </>
  )
}

export default App