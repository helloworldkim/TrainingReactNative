/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="DETAILS" component={DetailsScreen} />
        <Stack.Screen name="SETTING" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
