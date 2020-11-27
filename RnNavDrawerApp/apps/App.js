/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Homescreen from './components/Homescreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';
import CustomDrawer from './CustomDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Homescreen },
    Detail: { screen: DetailScreen },
    Setting: { screen: SettingScreen },
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 100,
  },
);

export default createAppContainer(DrawerNavigator);
