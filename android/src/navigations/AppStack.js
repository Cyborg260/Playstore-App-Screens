import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Screens//
import BottomBar from '../screens/BottomBar';
import Apps from '../screens/Apps';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen name='MainScreen' component={BottomBar} options={{headerShown:false}}/>
      <Stack.Screen name='Apps' component={Apps} options ={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default AppStack;