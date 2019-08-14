import * as actionTypes from './actionsTypes';

export const login = name => ({
  type: actionTypes.LOGIN,
  name
})