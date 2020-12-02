/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleCheck, ViewDeletedTodo, ViewAllTodos }) => {
    console.log('Todolist의 todos', todos);

    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => ViewDeletedTodo()}
            >
                <View >
                    <Text styles={styles.text} children="삭제된 TodoList 보기" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => ViewAllTodos()}
            >
                <View >
                    <Text styles={styles.text} children="TodoList 보기" />
                </View>
            </TouchableOpacity>
            {todos.map(todo => (
                <TodoItem key={todo.id} toggleCheck={toggleCheck} {...todo} removeTodo={removeTodo} />
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    listContainer: {
    },
    button: {
        backgroundColor: '#d142ff',
        flex: 1,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});

export default TodoList;
