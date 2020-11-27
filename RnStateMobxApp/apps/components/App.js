/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CounterList from './CounterList';
import PropTypes from 'prop-types';

//counterListContainer 에서 app 컴포넌트와 연결시킨 값들을 props로 받아올수 있음
// 해당 함수의 실행되는부분은 reducer에 명시되어있음!
const App = ({ counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement }) => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.counterButton}>
                <Button title="카운터 추가" onPress={handleAddCounter} />
                <Button title="카운터 삭제" onPress={handleRemoveCounter} />
            </View>
            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            </View >

        </ScrollView >
    );
};
const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: '100%',
        backgroundColor: '#a9a9a9',
    },
    counterButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
    },
});

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum: PropTypes.number,
    })),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
};
App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
    handleAddCounter: () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter: () => console.warn('handleRemoveCounter not defiend'),
};
export default App;
