import {View, Text, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const ListItem = (props) => {
    const {dt_txt, temp_min, temp_max, condition} = props
    const {item, temp, date} = styles
  return (
    <View style={item}>
        <Feather name='sun' size={50} color={'white'}/>
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{temp_min}</Text>
        <Text style={temp}>{temp_max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'orange',
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15,
    },
})

export default ListItem