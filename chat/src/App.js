import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Header from './components/Header'
import LoginContainer from './containers/LoginContainer'
import './app.css';

const reducer = (state = {}, action ) => {
  return state;
}

const store = createStore(reducer);

const st = (val) => {
  console.log(val);
}

const App = () => (
  <Provider store={store}>
    <Header />
    <LoginContainer start={st} />
  </Provider>
);


export default App;
