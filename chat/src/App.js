import React from 'react';

import Header from './components/Header'
import Log from './containers/LoginContainer' 
/* import Message from './components/Message' */
import ChatContainer from './containers/ChatContainer'
import './app.css';

const App = ({dispatch}) => (
  <>
    <Header />
    <Log dispatch={dispatch}/>
    <ChatContainer />
  </>
);


export default App;
