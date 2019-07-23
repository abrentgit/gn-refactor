import {
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_ERROR
} from '../actions/quotes-data';

const initialState = {
    quotes: '';
    error: null
}

export default function quoteReducer(state = initialState, action) {
if (action.type === FETCH_QUOTES_SUCCESS) {
  return Object.assign({}, state, {
    quotes: action.quotes,
    error: null
  });
} else if (action.type === FETCH_QUOTES_ERROR) {
  return Object.assign({}, state, {
    error: action.error
  });
}
return state;
}