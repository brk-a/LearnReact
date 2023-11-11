import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'

const CurrentWeather = () => {
    const {
        wrapper,
        container,
        bodyWrapper,
        description,
        temp,
        feels,
        highLow,
        highLowWrapper,
        message
    } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name='sun' size={100} color="black"/>
                <Text style={temp}>15</Text>
                <Text style={feels}> Feels like 10</Text>
                <View style={highLowWrapper}>
                    <Text style={highLow}>High: 18</Text>
                    <Text style={highLow}>Low: 12</Text>
                </View>
            </View>
            <View style={bodyWrapper}>
                <Text style={description}>It's cool and calm</Text>
                <Text style={message}>Great weather to play golf</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "orange",
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: "black",
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    },
})


export default CurrentWeather