import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'


const App = () => {
    const [loading, error, weather] = useGetWeather()
    const {container} = styles
    if(weather && weather.list && !loading){
        return(
            <NavigationContainer>
                <Tabs weather={weather}/>
            </NavigationContainer>
        )
    }
    return(
        <View style={container}>
            {error ? (
                <ErrorItem/>
            ) : (
                <ActivityIndicator size={'large'} color={'blue'}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})


export default App