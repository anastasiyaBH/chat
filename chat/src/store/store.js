import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers/reducers'
import * as actionTypes from './actions/actionsTypes';
import WSocket from '../service/socket'

/********************************************************** */
const composeEnhancers = compose;

const localMiddleware = store => next => action => {
  if(action.type === actionTypes.LOGIN) {
    localStorage.setItem('login', action.name);
  }
return next(action);
};

const pingMiddleware = store => next => action => {
    console.log('Действие: ' + action.type + ' Подробнее: ' + action.name);
return next(action);
};

/* const socketMiddleware = store => next => action => {
  if(action.type === actionTypes.CONNECT_USER) {
    const socket = WSocket(dispatch);
  }
return next(action);
}; */

const middlewares = [thunkMiddleware, localMiddleware, pingMiddleware]; 

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

/************************************************************* */
const store = createStore(reducer, enhancer);


export default store;