import { combineReducers } from 'redux';

import * as actionTypes from '../actions/actionsTypes';


const loginReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return action.name;
    }
    default: {
      return state;
    }
  }
}

const Rstate = [
  {
    message: 'Когда',
    author: 'Me',
    id: 0,
    time: '14.08.2019',
  },
  {
    message: 'Оно',
    author: 'Me',
    id: 1,
    time: '14.08.2019',
  },
  {
    message: 'Заработает?',
    author: 'Me',
    id: 2,
    time: '14.08.2019',
  }
];

const messageReducer = (state = Rstate, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_MESSAGE:
      return Rstate.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
          time: action.time,
        }
      ]);
    default:
      return state;
  }
}

export const reducer = combineReducers({
  loginState: loginReducer,
  messageState: messageReducer,
});