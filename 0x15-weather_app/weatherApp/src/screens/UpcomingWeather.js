import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 18.55,
            temp_min: 12.55,
        },
        weather: [
            {
                main: "Clear"
            },
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 17.55,
            temp_min: 11.55,
        },
        weather: [
            {
                main: "Cloudy"
            },
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 13.55,
            temp_min: 8.55,
        },
        weather: [
            {
                main: "Rainy"
            },
        ]
    },
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            temp_max={item.main.temp_max}
            temp_min={item.main.temp_min}
            dt_txt={item.dt_txt}
        />
    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/upcoming-bg.jpg")}
                style={image}
            >
                <Text>UpcomingWeather</Text>
                <FlatList
                    keyExtractor={item => item.dt_txt}
                    data={DATA}
                    renderItem={renderItem}
                    style={styles.flatList}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    flatList: {},
    image: {
        flex: 1,
    },
})

export default UpcomingWeather