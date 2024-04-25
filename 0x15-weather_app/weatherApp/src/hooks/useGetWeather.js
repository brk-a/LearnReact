import { useEffect, useState } from "react"
import * as Location from 'expo-location'
import { OWM_API_KEY } from '@env'

export const useGetWeather  = () => {
    const [loading, setLoading] = useState(true)
    const [longitude, setLongitude] = useState([])
    const [latitude, setLatitude] = useState([])
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OWM_API_KEY}&units=metric`
            )
            const data = res.json()
            setWeather(data)
        } catch (error) {
            setError('could not fetch weather')
            console.info('fetchWeatherDataError', error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            await fetchWeatherData()
        })()
    }, [latitude, longitude])

    return [
        loading,
        error,
        weather,
    ]
}