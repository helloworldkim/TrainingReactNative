/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Counter from './Counter';

const CounterList = ({ counter, handleIncrement, handleDecrement }) => {

    const counterModule = counter.map((item, index) => (
        <Counter
            key={index}
            index={index}
            value={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
        />
    ));

    return (
        <View>
            {counterModule}
        </View>
    );
};
//해당 component의 타입선언
CounterList.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum: PropTypes.number,
    })),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};
//기본값이 무엇인지 
CounterList.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
};

export default CounterList;
