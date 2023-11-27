import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                nome="Home"
                component={Home}
            />
            <Tab.Screen
                nome="Search"
                component={Search}
            />
            <Tab.Screen
                nome="Favorites"
                component={Favorites}
            />
            <Tab.Screen
                nome="Favorites"
                component={Favorites}
            />
             </Tab.Navigator>
 )
}
export  default Routes;