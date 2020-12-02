/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import MyButton from '../controlls/MyButton';

const db = openDatabase({ name: 'Users.db' }); //db이름

const ViewUser = ({ navigation }) => {
    let [userId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        console.log(userId);
        setUserData({});
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [userId],
                (tx, res) => {
                    if (res.rows.length === 1) {
                        setUserData(res.rows.item(0));
                    } else {
                        alert('유저정보없음');
                    }
                }
            );
        });
    };

    const userInfo = userData.user_id ? (
        <View style={styles.ViewUser}>
            <Text>아이디:{userData.user_id} </Text>
            <Text>이름:{userData.user_name} </Text>
            <Text>전화번호: {userData.user_contact}</Text>
            <Text>주소: {userData.user_address}</Text>
        </View>
    ) : (
            <View />
        );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center", fontSize: 24 }}>조회화면</Text>
                <TextInput
                    maxLength={50}
                    style={styles.textInput}
                    onChangeText={(userId) => setInputUserId(userId)}
                    placeholder="아이디를 입력해주세요"
                />
                <MyButton title="검색" onButtonClick={searchUser} />
                {userInfo}
            </View>
            <MyButton
                title="메인으로"
                onButtonClick={() => {
                    navigation.navigate('HomeScreen');
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#1877f2',
        fontSize: 16,
        margin: 10,
    },
    ViewUser: {
        margin: 10,
    },
});


export default ViewUser;
