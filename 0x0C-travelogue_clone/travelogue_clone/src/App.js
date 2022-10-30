import React, {useEffect, useState} from "react";
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData, getWeatherData } from "./api";

import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [places, setPlaces] = useState([])

  const [childClick, setChildClick] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating)
    setFilteredPlaces(filtered)
  }, [rating, places])
  
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true)

      getWeatherData(coordinates.lat, coordinates.lng)
        .then((data) => setWeatherData(data))

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data?.filter((place) => (place.name && place.num_reviews > 0)))
          setFilteredPlaces([])
          setRating('')
          setIsLoading(false)
        })
    }
  }, [type, bounds, coordinates.lat, coordinates.lng])

  return(
    <>
      <CssBaseline/>

      <Header setCoordinates={setCoordinates}/>

      <Grid container spacing={3} style={{width: '100%'}}>
        
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places} childClick={childClick} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating}/>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Map weatherData={weatherData} setChildClick={setChildClick} setBounds={setBounds} setCoordinates={setCoordinates} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places}/>
        </Grid>
        
      </Grid>
    </>
  )
}

export default App