/* eslint-disable prettier/prettier */
import React from 'react';
// import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterListContainer from './containers/CounterListContainer';
import reducers from './reducers';

//reducer를 준다! reducer는 function의 일종
const store = createStore(reducers);


const App = () => {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
};

export default App;
