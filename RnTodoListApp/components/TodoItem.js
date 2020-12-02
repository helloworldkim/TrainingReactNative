/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({ content, id, checked, removeTodo, toggleCheck }) => {
    console.log(checked);
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => toggleCheck(id, checked)}>
                {/* checked 값에따라서 보여주는 아이콘이 다르게! 삼항식 */}
                {checked === 'TRUE' ? (
                    <View style={styles.margin}>
                        <Icon name="check-square" size={30} color="#3143e8" />
                    </View>
                ) : (
                        <View style={styles.margin}>
                            <Icon name="square" size={30} color="#3143e8" />
                        </View>
                    )}
            </TouchableOpacity>
            <Text style={[styles.itemText, checked === 'TRUE' ? styles.strikeText : styles.unstrikeText]}>{content}</Text>
            <TouchableOpacity>
                <View>
                    <MaterialCommunityIcon style={styles.delete} size={30} onPress={() => removeTodo(id)} name="delete-empty" />
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
