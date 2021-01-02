import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {BottomNavigator} from './components/bottomNavigator';
import LoginScreen from './screens/login'


export default function App() {
  return (
      <AppContainer/>
  );
}

 const SwitchNavigator = createSwitchNavigator({
     LoginScreen:LoginScreen,
  BottomNavigator:BottomNavigator,

  
 })

 const AppContainer = createAppContainer(SwitchNavigator);


