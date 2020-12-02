/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'todo.db' });

// 테이블명 todo, db파일명 Todo.db (primary key id값) content

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: Number, content: '', checked: '', deletenum: Number },
      ],//id, content, checked, deletenum 1이면 참 0이면 거짓
    };
  }
  componentDidMount() {
    //테이블 재생성 위해서 한 부분
    // db.transaction((txn) => {
    //   txn.executeSql('DROP TABLE IF EXISTS todo', []);
    // });
    this.initalDBTable();
    this.ViewAllTodos();
  }//componentDidMount 종료

  //초기에 테이블 확인후 생성
  initalDBTable = () => {
    const query = `select name from sqlite_master where type='table' and name='todo'`;
    db.transaction((txn) => {
      txn.executeSql(
        query, //실행할 쿼리문
        [],     //prepared statement 에서 사용할부분 없으면 빈값
        (tx, res) => {    //Callback 함수 또는 리턴처리
          if (res.rows.length === 0) {
            const dropTableQuery = `DROP TABLE IF EXISTS todo`;
            const createTableQuery =
              `CREATE TABLE todo (
                    id	INTEGER PRIMARY KEY AUTOINCREMENT,
                    content	TEXT NOT NULL,
                    checked	TEXT NOT NULL,
                    deletenum INTEGER NOT NULL)`;
            txn.executeSql(dropTableQuery, []);
            txn.executeSql(createTableQuery, []);
            console.log('table drop후 생성!');
          }//if문
        });//txn.executeSql
    });//db.transaction 종료
  }
  ViewAllTodos = () => {
    db.transaction((txn) => {
      //select 실행
      console.log('select문 시작');
      const selectQuery = `select * from todo where deletenum=0`;
      txn.executeSql(selectQuery, [], (tx, res) => {
        let temp = [];
        for (let i = 0; i < res.rows.length; i++) {
          console.log('i값', i);
          temp.push(res.rows.item(i));
        }
        this.setState({ todos: temp });
        console.log('todos값:', this.state.todos);
      });//executeSql 종료
      console.log('select문 종료');
    });
  };
  removeTodo = (id) => {
    // console.log('onRemove!');
    // console.log('id값 가져온값:', id);
    db.transaction((txn) => {
      const deleteQuery = `UPDATE todo SET deletenum=1 where id=?`;
      txn.executeSql(deleteQuery, [id], (tx, res) => {
        console.log('삭제여부:', res.rowsAffected);
        this.ViewAllTodos();  //다시 렌더링
      });
    });
  };
  onAddTodo = (content) => {
    // console.log('onAddTodo!');
    // console.log('들고온 content값:', content);
    const insertQuery = `insert into todo(content,checked,deletenum) values(?,'FALSE',0)`;
    db.transaction((txn) => {
      txn.executeSql(insertQuery, [content], (tx, res) => {
        this.ViewAllTodos();
      });
    });
  };
  toggleCheck = (id, checked) => {
    // console.log('toggleCheck id값', id);
    // console.log('toggleCheck checked값', checked);
    //  SQLite db에는 boolean 데이터타입이 없음!
    if (checked === 'TRUE') {
      checked = 'FALSE';
    } else if (checked === 'FALSE') {
      checked = 'TRUE';
    }
    const insertQuery = `UPDATE todo SET checked = ? where id =?`;
    db.transaction((txn) => {
      txn.executeSql(insertQuery, [checked, id], (tx, res) => {
        this.ViewAllTodos();
      });
    });
  };
  ViewDeletedTodo = () => {
    db.transaction((txn) => {
      console.log('삭제된 것만 select!');
      const selectQuery = `select * from todo where deletenum=1`;
      txn.executeSql(selectQuery, [], (tx, res) => {
        let temp = [];
        for (let i = 0; i < res.rows.length; i++) {
          temp.push(res.rows.item(i));
        }
        this.setState({ todos: temp });
      });//executeSql 종료
    });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>TodoList</Text>
          <View style={styles.card}>
            <TodoInsert onAddTodo={this.onAddTodo} />
            <TodoList todos={this.state.todos} toggleCheck={this.toggleCheck} removeTodo={this.removeTodo} ViewAllTodos={this.ViewAllTodos} ViewDeletedTodo={this.ViewDeletedTodo} />

          </View>
        </SafeAreaView>
      </>
    );
  }
}


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
