/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  // const { id, textValue, checked } = todos;

  const addTodo = (text) => {
    if (text === '') {
      return;
    }

    setTodos([
      ...todos,
      { id: todos.length, textValue: text, checked: false },
    ]);
  };
  const onRemove = (id) => {
    console.log(`App/delete id =>${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    console.log(`App/Toggle id =>${id}`);
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    ),
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>TodoList</Text>
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList onToggle={onToggle} onRemove={onRemove} todos={todos} />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    fontSize: 24,
    margin: 20,

  },
});

export default App;
