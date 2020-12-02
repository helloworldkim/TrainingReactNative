/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import MyButton from '../controlls/MyButton';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'Users.db' }); //db이름

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        var query = "select name from sqlite_master where type='table' and name='table_user'";
        db.transaction((txn) => {
            txn.executeSql(
                query, //실행할 쿼리문
                [],     //prepared statement 에서 사용할부분 없으면 빈값
                (tx, res) => {    //Callback 함수 또는 리턴처리
                    // console.log('res:', res);
                    // console.log('tx:', tx);
                    // console.log('item:', res.rows.length);
                    if (res.rows.length === 0) {
                        const dropTableQuery = 'DROP TABLE IF EXISTS table_user';
                        const createTableQuery = `CREATE TABLE table_user (
                            user_id	INTEGER PRIMARY KEY AUTOINCREMENT,
                            user_name	TEXT NOT NULL,
                            user_contact	TEXT,
                            user_address	TEXT NOT NULL)`;
                        txn.executeSql(dropTableQuery, []);
                        txn.executeSql(createTableQuery, []);
                        console.log('table drop후 생성!');
                    }

                }
            );
        });
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center", fontSize: 24 }}>SQLite Sample</Text>
                <MyButton
                    title="사용자 등록"
                    onButtonClick={() => {
                        navigation.navigate('Register');
                    }}
                />
                <MyButton
                    title="사용자 전체 조회"
                    onButtonClick={() => {
                        navigation.navigate('ViewAllUsers');
                    }}
                />
                <MyButton
                    title="사용자 조회"
                    onButtonClick={() => {
                        navigation.navigate('ViewUser');
                    }}
                />
                <MyButton
                    title="사용자 수정"
                    onButtonClick={() => {
                        navigation.navigate('UpdateUser');
                    }}
                />
                <MyButton
                    title="사용자 삭제"
                    onButtonClick={() => {
                        navigation.navigate('DeleteUser');
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
