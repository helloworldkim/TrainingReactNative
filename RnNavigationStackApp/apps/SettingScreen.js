/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
const SettingScreen = ({ navigation }) => {
    return (
        <View style={styles.layoutStyle}>
            <View style={styles.buttonStyle}>
                <Button title="홈" onPress={() => navigation.navigate('HOME')} />
                <Button title="상세화면재진입" onPress={() => navigation.push('DETAILS')} />
                <Button title="세팅" onPress={() => navigation.navigate('SETTING')} />
                <Button title="돌아가기" onPress={() => navigation.goBack()} />
                <Button title="처음으로" onPress={() => navigation.popToTop()} />
            </View>
            <Text style={styles.mainStyle}>Setting UI 레이아웃</Text>
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
export default SettingScreen;
