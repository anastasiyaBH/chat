import * as actionTypes from '../actions/actionsTypes';

export const reducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return action.name;
    }
    default: {
      return state;
    }
  }
}