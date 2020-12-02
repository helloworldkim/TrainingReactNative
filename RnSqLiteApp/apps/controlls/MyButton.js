/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onButtonClick}>
            <Text children={props.title} style={styles.text} />

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1877f2',
        padding: 15,
        marginTop: 6,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#ffffff',
    },
});

export default MyButton;
