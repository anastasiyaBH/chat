import React from 'react';

import Header from './components/Header'
/* import Log from './containers/LoginContainer' */
import Message from './components/Message'
import './app.css';

const App = () => (
  <>
    <Header />
    <Message message="Hello" time="14.08.2019" from="Me" />
  </>
);


export default App;
