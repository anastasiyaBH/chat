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

export const reducer = combineReducers({
  loginState: loginReducer,
  /* messageState: messageReducer */
});