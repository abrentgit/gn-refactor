// @ts-check

import { GET_QUOTE_SUCCESS, GET_QUOTE_ERROR } from '../actions/quotesActions';

const initialState = {
  quotes: [],
  error: null
};

export default function quotesReducer(state = initialState, action) {
  if (action.type === GET_QUOTE_SUCCESS) {
    return Object.assign({}, state, {
      quotes: action.quotes,
      error: null
    });
  } else if (action.type === GET_QUOTE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
