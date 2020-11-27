/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TodoInsert = ({ onAddTodo }) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    const todoInputHandler = (newTodo) => {

        setNewTodoItem(newTodo);
    };
    const addTodoHandlerforEnter = (e) => {
        if (e.nativeEvent.key !== 'Enter') {
            return;
        }
        onAddTodo(newTodoItem);
        setNewTodoItem('');

    };
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="할일추가!!"
                placeholderTextColor={'#999'}
                onChangeText={todoInputHandler}
                onKeyPress={addTodoHandlerforEnter}
                value={newTodoItem}
                autoCorrect={false} />
            <View style={styles.button}>
                <Button title={'추가'} onPress={addTodoHandler} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        padding: 20,
        borderBottomColor: '#9e9e9e',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button: {
        marginRight: 20,
    },

});

export default TodoInsert;
