/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({ index, value, handleIncrement, handleDecrement }) => {
    return (
        <View style={styles.outline}>
            <Text children={`Count:${value.counterNum}`} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleIncrement(index)}
                >
                    <Text
                        style={styles.text}
                        children={'+'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleDecrement(index)}
                >
                    <Text
                        style={styles.text}
                        children={'-'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
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

Counter.propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};
Counter.defaultProps = {
    index: 0,
    value: { counterNum: 0 },
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
};
export default Counter;
