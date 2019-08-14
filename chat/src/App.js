import React from 'react';

import Header from './components/Header'
import Log from './containers/LoginContainer'
import './app.css';

const st = (val) => {
  console.log(val);
}

const App = () => (
  <>
    <Header />
    <Log start={st} /> 
  </>
);


export default App;
