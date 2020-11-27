/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({ textValue, id, checked, onRemove, onToggle }) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                {/* <View style={styles.margin}>
                    <Icon name="check-square" color="#0000ff" size={30} />
                </View> */}
                {checked ? (
                    <View style={styles.margin}>
                        <Icon name="check-square" size={30} color="#3143e8" />
                    </View>
                ) : (
                        <View style={styles.margin}>
                            <Icon name="square" size={30} color="#3143e8" />
                        </View>
                    )}

            </TouchableOpacity>
            <Text style={[styles.itemText, checked ? styles.strikeText : styles.unstrikeText]}>{textValue}</Text>
            <TouchableOpacity>
                <View style={styles.circle}>
                    <MaterialCommunityIcon style={styles.delete} size={30} onPress={() => onRemove(id)} name="delete-empty" />
                </View>
            </TouchableOpacity>
        </View>

    );
};
const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        flex: 1,
        fontWeight: '500',
        fontSize: 20,
        marginVertical: 15,
    },
    margin: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    delete: {
        color: '#ff0000',
        marginRight: 20,
    },
});

export default TodoItem;