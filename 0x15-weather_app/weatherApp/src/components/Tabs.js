import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = (props) => {
    const {weather} = props
    return (
        <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarStyle: {
                        backgroundColor: 'lightblue',
                    },
                    headerStyle: {
                        backgroundColor: 'lightblue',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: 'tomato',
                    },
                }}
            >
                <Tab.Screen
                    name='Current'
                    component={CurrentWeather}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Feather
                                name='droplet'
                                size={25}
                                color={focused ? 'tomato' : 'black'}
                            />
                        ),
                    }}
                >
                    {() => <CurrentWeather weatherData={weather.list[0]}/>}
                </Tab.Screen>
                <Tab.Screen
                    name='Upcoming'
                    component={UpcomingWeather}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Feather
                                name='clock'
                                size={25}
                                color={focused ? 'tomato' : 'black'}
                            />
                        ),
                    }}
                >
                    {() => <UpcomingWeather weatherData={weather.list}/>}
                </Tab.Screen>
                <Tab.Screen
                    name='City'
                    component={City}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Feather
                                name='home'
                                size={25}
                                color={focused ? 'tomato' : 'black'}
                            />
                        ),
                    }}
                >
                    {() => <City weatherData={weather.city}/>}
                </Tab.Screen>
            </Tab.Navigator>
    )
}

export default Tabs