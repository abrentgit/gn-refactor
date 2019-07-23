import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_ERROR
} from '../actions/protected-data';

const initialState = {
  data: '',
  error: null,
  quotes: '',
  quotesError: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === FETCH_QUOTES_SUCCESS) {
    return Object.assign({}, state, {
      quotes: action.quotes,
      quotesError: null
    });
  } else if (action.type === FETCH_QUOTES_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
