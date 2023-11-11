import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'
const City = ({weatherData}) => {
    const {name, country, population, sunrise, sunset} = weatherData
    const {
        container,
        imageLayout,
        cityName,
        countryName,
        cityText,
        populationWrapper,
        riseSetWrapper,
        riseSetText,
        populationText,
        rowLayout
    } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/city-bg.jpg")}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColour={'red'}
                        bodyText={`Population ${population}`}
                        bodyTextStyle={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={'sunrise'}
                        iconColour={'white'}
                        bodyText={moment(sunrise).format('HH:mm:ss')}
                        bodyTextStyle={riseSetText}
                    />
                    <IconText
                        iconName={'sunset'}
                        iconColour={'white'}
                        bodyText={moment(sunset).format('HH:mm:ss')}
                        bodyTextStyle={riseSetText}
                    />
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default City