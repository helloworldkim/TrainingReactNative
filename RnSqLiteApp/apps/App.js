/* eslint-disable prettier/prettier */
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import { Animated } from 'react-native';
import RegisterUser from './components/RegisterUser';
import ViewAllUsers from './components/ViewAllUsers';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: '메인',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: '사용자등록',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="ViewAllUsers"
          component={ViewAllUsers}
          options={{
            title: '사용자 전체 조회',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{
            title: '사용자 조회',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{
            title: '사용자 수정',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{
            title: '사용자 삭제',
            headerStyle: {
              backgroundColor: '#1877F5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
