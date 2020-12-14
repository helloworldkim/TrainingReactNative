/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

import { View, Text, Platform, PermissionsAndroid } from 'react-native';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') { //안드로이드 위치 정보 수집권한 요청
      return await PermissionsAndroid.request(
        // "android.permission.ACCESS_FINE_LOCATION"
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (error) {
    console.log('에러:', error);
  }
}
export default function App() {
  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission()
      .then(result => {
        if (result === 'granted') {
          Geolocation.getCurrentPosition(
            pos => {
              // setLocation(pos.coords);
              setLocation({//부산역좌표
                latitude: 35.1144,
                longitude: 129.0395,
              });
            },
            error => {
              console.log('position error:', error);
            },
            {
              enableHighAccuracy: true,
              timeout: 3600,  //20000
              maximumAge: 3600,
            },
          );

        }

      })
      .catch(err => { console.log('requestPermission에러:', err); });
  }, []);
  if (!location) {
    return (
      <View>
        <Text>GPS disabled</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1, margin: 10 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            // 줌 설정
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0022,
          }}>
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="내 위치!"
            description="조선왕조 왕의 거처"
            image={require('./images/pin.png')} />
        </MapView>
      </View>
    </>

  );
};


