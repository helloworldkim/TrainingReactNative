/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text style={styles.text}>DetailScreen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9a9a9',
    },
    text: {
        fontSize: 24,
        color: '#0f0fff',
    },
});

export default DetailScreen;
