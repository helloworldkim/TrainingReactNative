/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text, Platform, PermissionsAndroid, StyleSheet, Button, Linking } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Getlocation from 'react-native-get-location';
import MyMarker from './components/MyMarker';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLocation: { //초기위치 경복궁
                latitude: 37.578046,
                longitude: 126.976889,
                latitudeDelta: 0.02, //0.1 default 0.05,0.02 줌 정도
                longitudeDelta: 0.02,
            },
            pinLocation: { //핀위치 부산IT교육센터
                latitude: 35.156021,
                longitude: 129.059480,
            },
        };
    }
    componentDidMount() {
        console.log(this.state.initLocation);
    }
    async requestPermission() {
        try {
            if (Platform.OS === 'ios') {
                return await Geolocation.requestAuthorization('always');
            }
            else if (Platform.OS === 'android') {
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }
    getLocation = async () => {
        await Getlocation.getCurrentPosition(
            {
                enableHighAccuracy: true,
                // timeout: 15000,
            })
            .then(location => {
                console.log('current');
                console.log(location);
                let tempLocation = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0122,
                };
                this.setState({ initLocation: tempLocation });
            })
            .catch(err => {
                const { code, message } = err;
                console.log(code, message);
            });
    }
    MyLocation = () => {
        // console.log('click!');
        this.getLocation();
    }
    onMarkerClick = () => {
        Linking.openURL('http://www.busanit.ac.kr/m');
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.initLocation}
                    initLocation={this.state.initLocation}
                >
                    {this.state.initLocation ? <MyMarker
                        location={this.state.initLocation}
                        title="내위치"
                    /> : ''}
                    <Marker
                        coordinate={this.state.pinLocation}
                        title="부산 IT교육센터"
                        description="http://www.busanit.ac.kr/"
                        onCalloutPress={this.onMarkerClick}
                        image={require('./images/pin.png')}
                    />

                </MapView>
                <Button
                    title="현재위치"
                    onPress={this.MyLocation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    }
});