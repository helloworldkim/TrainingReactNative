/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

let ListItemView = ({ item }) => {
    return (
        <View>
            <Text>Id: {item.user_id}</Text>
            <Text>Name: {item.user_name}</Text>
            <Text>Contact: {item.user_contact}</Text>
            <Text>Address: {item.user_address}</Text>
        </View>
    );
};

export default ListItemView;
