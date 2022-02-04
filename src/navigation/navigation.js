import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../containers/Main';
import Profile from '../containers/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackNavOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  headerTitleAlign: "center"
}

const getTabIcon = (iconName, focused) => {
  return (
    <Icon
      name={iconName}
      size={20}
      color={focused ? 'blue' : "gray"}
    />
  )
}


export default function TabStack () {
    const tabIcons = {
        main: 'th-large',
        profile: 'user'
    }

    const makeScreenOpts = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getTabIcon(tabIcons[route.name], focused)
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center'
      }
    )

    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={makeScreenOpts}
          >
            <Tab.Screen name="main" key="main" component={Main} options={{title: "Главная"}} />
            <Tab.Screen name="profile" key="profile" component={Profile} options={{title: "Профиль", }} />
          </Tab.Navigator>
       </NavigationContainer>
      )
}