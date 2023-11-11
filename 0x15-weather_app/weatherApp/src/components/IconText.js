import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const {iconColour, iconName, bodyText, bodyTextStyle} = props
    const {textTheme, container} = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColour} />
            <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
    },
})

export default IconText