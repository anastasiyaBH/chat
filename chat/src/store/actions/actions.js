import * as actionTypes from './actionTypes';

export const login = name => ({
  type: actionTypes.LOGIN,
  name
})