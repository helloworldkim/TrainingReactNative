/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MyButton from '../controlls/MyButton';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'Users.db' }); //db이름

const RegisterUser = ({ navigation }) => {
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    const registerUser = () => {
        console.log(userName, userContact, userAddress);
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
            const query = `INSERT INTO table_user(user_name,user_contact,user_address) VALUES(?,?,?);`;
            tx.executeSql(query, [userName, userContact, userAddress],
                (txn, res) => {
                    console.log('res:', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert('등록 성공',
                            '사용자 등록 정상적으로 성공하였습니다',
                            [
                                { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
                            ],
                            { cancelable: false });
                    } else {
                        alert('등록실패');
                    }
                });
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text style={{ textAlign: "center", fontSize: 24 }}>등록화면</Text>
                        <TextInput
                            placeholder="이름을 적어주세요"
                            onChangeText={(name) => {
                                setUserName(name);
                            }}
                            maxLength={20}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="연락처"
                            keyboardType="numeric"
                            onChangeText={(contact) => {
                                setUserContact(contact);
                            }}
                            maxLength={15}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="주소을 적어주세요"
                            onChangeText={(address) => {
                                setUserAddress(address);
                            }}
                            maxLength={50}
                            style={styles.textInput}
                        />
                        <MyButton
                            title="저장"
                            onButtonClick={() => {
                                registerUser();
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
export default RegisterUser;
