import * as actionTypes from './actionsTypes';

export const login = name => ({
  type: actionTypes.LOGIN,
  name
});

export const receiveMessage = (message, from, id, time) => ({
  type: actionTypes.RECEIVE_MESSAGE,
  message,
  from,
  id,
  time
});
