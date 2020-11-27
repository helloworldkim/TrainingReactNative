/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (index) => dispatch(actions.increment(index)),
    handleDecrement: (index) => dispatch(actions.decrement(index)),
    handleAddCounter: () => dispatch(actions.add()),
    handleRemoveCounter: () => dispatch(actions.remove()),
});



//connect(state,action매핑값) ( Presentation [Component dir] 연결할때 사용할 component 객체를 넣어준다)
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default CounterListContainer;
