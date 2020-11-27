/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from './components/HomeScreen';

import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';

import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';
// const TabNavigator = createBottomTabNavigator({
// const TabNavigator = createMaterialBottomTabNavigator({
const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ color: tintColor }} size={25} name={'home'} />
        </View>
      ),
      activeColor: '#dc143c',
      inactivateColor: '#226557',
      barStyle: { backgorundColor: '#ffc8cb' },
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ color: tintColor }} size={25} name={'appstore1'} />
        </View>
      ),
      activeColor: '#000000',
      inactivateColor: '#226557',
      barStyle: { backgorundColor: '#b0c4de' },
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ color: tintColor }} size={25} name={'setting'} />
        </View>
      ),
      activeColor: '#dc143c',
      inactivateColor: '#226557',
      barStyle: { backgorundColor: '#ffc8cb' },
    },
  },
},
  {
    initialRouteName: 'Home',
    // shifting: true, //선택된 부분만 글자가 보여짐
    swipeEnabled: false,
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     // swipeEnabled: true,
  //     tabBarIcon: ({ horizontal, tintColor }) => {
  //       const { routeName } = navigation.state; //Home ,Detail,Setting
  //       let iconName;
  //       if (routeName === 'Home') {
  //         iconName = 'home';
  //       }
  //       else if (routeName === 'Detail') {
  //         iconName = 'appstore1';
  //       } else if (routeName === 'Setting') {
  //         iconName = 'setting';
  //       }
  //       return (
  //         <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
  //       );

  //     },
  //   }),
  //탭바 아이콘 기타설정 네이텝바 쓸때 사용되는 옵션
  // tabBarOptions: {
  //   activeTintColor: '#ffffff',
  //   inactiveTintColor: '#a9a9a9',
  //   style: {
  //     backgroundColor: '#000000',
  //   },
  // }, //tabBarOptions 마지막

  // }, //defaultNavigationOptions 마지막
);


export default createAppContainer(TabNavigator);
