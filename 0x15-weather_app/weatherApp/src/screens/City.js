import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    View
} from 'react-native'
import IconText from '../components/IconText'
const City = () => {
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
                <Text style={[cityName, cityText]}>Nairobi</Text>
                <Text style={[countryName, cityText]}>Kenya</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColour={'red'}
                        bodyText={'10,000,000'}
                        bodyTextStyle={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={'sunrise'}
                        iconColour={'white'}
                        bodyText={'06:01:23'}
                        bodyTextStyle={riseSetText}
                    />
                    <IconText
                        iconName={'sunset'}
                        iconColour={'white'}
                        bodyText={'18:33:50'}
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