/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controlls/MyButton';

const db = openDatabase({ name: 'Users.db' });

const DeleteUser = ({ navigation }) => {
    let [userId, setUserId] = useState('');

    let deleteUser = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM table_user where user_id=?',
                [userId],
                (tx, res) => {
                    console.log('결과:', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '삭제성공',
                            '정상적으로 삭제되었습니다',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('유효한 아이디를 입력해주세요');
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center", fontSize: 24 }}>삭제화면</Text>
                    <TextInput
                        placeholder="유저 아이디를 입력하세요"
                        onChangeText={
                            (userId) => setUserId(userId)
                        }
                        style={{ padding: 10 }}
                    />
                    <MyButton title="유저삭제" onButtonClick={deleteUser} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DeleteUser;
