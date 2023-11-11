import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({weatherData}) => {

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
                <FlatList
                    keyExtractor={item => item.dt_txt}
                    data={weatherData}
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