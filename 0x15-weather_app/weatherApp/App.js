import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'


const App = () => {
    const {container} = styles
    return (
        <View style={container}>
            {/* <CurrentWeather/> */}
            {/* <UpcomingWeather/> */}
            <City/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default App