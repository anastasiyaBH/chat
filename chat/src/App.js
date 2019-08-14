import React from 'react';
import { Provider } from 'react-redux'


import Header from './components/Header'
import LoginContainer from './containers/LoginContainer'
import './app.css';

import store from './store/store'

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
