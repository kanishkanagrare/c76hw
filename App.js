import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './Screens/HomeScreen';
import DailyPic from './Screens/DailyPics'
import StarMap from './Screens/StarMap'
import SpaceCraft from './Screens/SpaceCraft'


const Stack= createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="home"
    screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Daily Picture" component={DailyPic}/>
    <Stack.Screen name="Space Craft" component={SpaceCraft}/>
    <Stack.Screen name="Star Map" component={StarMap}/>
  </Stack.Navigator>
    </NavigationContainer>
  );
}

