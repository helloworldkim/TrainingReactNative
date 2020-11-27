/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.layoutStyle}>
            <View style={styles.buttonStyle}>
                <Button title="상세화면" onPress={() => navigation.navigate('DETAILS')} />
                <Button title="세팅화면" onPress={() => navigation.navigate('SETTING')} />
            </View>
            <Text style={styles.mainStyle}>Home UI 레이아웃</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        backgroundColor: '#e9e9e9',
    },
    layoutStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
});
export default HomeScreen;
