import React from 'react';
import Header from './components/Header'
import LoginContainer from './containers/LoginContainer'
import './app.css';

const st = (val) => {
  console.log(val);
}

const App = () => (
  <div>
    <Header />
    <LoginContainer start={st} />
  </div>
);


export default App;
