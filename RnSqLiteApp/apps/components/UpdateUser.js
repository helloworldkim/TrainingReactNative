/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MyButton from '../controlls/MyButton';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'Users.db' }); //db이름

const UpdateUser = ({ navigation }) => {
    let [userId, setInputUserId] = useState('');
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let updateAllInfo = (name, contact, address) => {
        setUserName(name);
        setUserContact(contact);
        setUserAddress(address);

    };

    let searchUser = () => {
        console.log(userId);
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [userId],
                (tx, res) => {
                    console.log('recode', res.rows.item(0));
                    if (res.rows.length === 1) {
                        var temp = res.rows.item(0);
                        updateAllInfo(temp.user_name, temp.user_contact, temp.user_address);
                    } else {
                        alert('유저정보없음');
                        updateAllInfo('', '', '');
                    }
                }
            );
        });
    };
    const updateUser = () => {
        console.log(userId, userName, userContact, userAddress);
        if (userId.length === 0) {
            alert('유저아이디를 입력하세요');
            return;
        }
        if (userName.length === 0) {
            alert('이름을 입력하세요');
            return;
        }
        if (userContact.length === 0) {
            alert('번호를 입력하세요');
            return;
        }
        if (userAddress.length === 0) {
            alert('주소를 입력하세요');
            return;
        }
        //db처리
        db.transaction((tx) => {
            const query =
                `UPDATE table_user SET 
                user_name=?,
                user_contact=?,
                user_address=?
                WHERE user_id=?;
            `;
            tx.executeSql(query, [userName, userContact, userAddress, userId],
                (txn, res) => {
                    console.log('res:', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert('수정 성공',
                            '사용자 수정 정상적으로 성공하였습니다',
                            [
                                { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
                            ],
                            { cancelable: false });
                    } else {
                        alert('수정실패');
                    }
                });
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text style={{ textAlign: "center", fontSize: 24 }}>수정화면</Text>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                maxLength={50}
                                style={styles.textInput}
                                onChangeText={(userId) => setInputUserId(userId)}
                                placeholder="아이디를 입력해주세요"
                                value={userId}
                            />
                            <MyButton title="검색" onButtonClick={searchUser} />
                        </View>
                        <TextInput
                            placeholder="이름을 적어주세요"
                            value={userName}
                            onChangeText={(userName) => {
                                setUserName(userName);
                            }}
                            maxLength={20}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="연락처"
                            keyboardType="numeric"
                            value={userContact}
                            onChangeText={(userContact) => {
                                setUserContact(userContact);
                            }}
                            maxLength={15}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="주소을 적어주세요"
                            value={userAddress}
                            onChangeText={(userAddress) => {
                                setUserAddress(userAddress);
                            }}
                            maxLength={50}
                            style={styles.textInput}
                        />
                        <MyButton
                            title="저장"
                            onButtonClick={() => {
                                updateUser();
                            }}
                        />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
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
});
export default UpdateUser;
