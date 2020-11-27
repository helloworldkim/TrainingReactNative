/* eslint-disable prettier/prettier */
import { Observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

@Observer
class Counter extends Component {
    render() {
        return (
            <View style={styles.outline}>
                <Text children={`Count:${0}`} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text
                            style={styles.text}
                            children={'+'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text
                            style={styles.text}
                            children={'-'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    outline: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#d142ff',
        width: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 25,
    },
});

export default Counter;
