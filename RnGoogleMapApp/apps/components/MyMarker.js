/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Button } from 'react-native';
export default class MyMarker extends Component {
    render() {
        return (
            <View>
                <Marker
                    coordinate={this.props.location}
                    title={this.props.title}
                // onCalloutPress={this.onMarkerClick}
                // image={require('./images/pin.png')} 디폴트 이미지 사용
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({

});