/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoItem onToggle={onToggle} key={todo.id} {...todo} onRemove={onRemove} />
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;