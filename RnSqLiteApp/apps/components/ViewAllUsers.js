/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import MyButton from '../controlls/MyButton';
import ListItemView from './ListItemView';

const db = openDatabase({ name: 'Users.db' }); //db이름

const ViewAllUsers = ({ navigation }) => {
    let [listItems, setListItems] = useState([]);

    useEffect(() => {
        const query = 'select * from table_user';
        db.transaction((txn) => {
            txn.executeSql(query, [], (tx, res) => {
                console.log('res.row.length:', res.rows.length);
                var temp = [];
                for (let i = 0; i < res.rows.length; ++i) {
                    temp.push(res.rows.item(i));
                }
                setListItems(temp);
            }
            );
        }
        );
    }, []);

    const newListItems = listItems.map((item) =>
        <ListItemView
            style={{ backgroundColor: 'white', padding: 20, borderBottomColor: '#0000ff' }}
            key={item.user_id}
            item={item} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {newListItems}
                </View>
                <MyButton
                    title="메인으로"
                    onButtonClick={() => {
                        navigation.navigate('HomeScreen');
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};



export default ViewAllUsers;
