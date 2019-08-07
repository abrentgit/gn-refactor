import { GET_QUOTE, GET_QUOTE_ERROR } from '../actions/quotes';

const initialState = {
  quotes: '',
  error: null
};

export default function quotesReducer(state = initialState, action) {
  if (action.type === GET_QUOTE) {
    return Object.assign({}, state, {
      quotes: action.quotes
    });
  } else if (action.type === GET_QUOTE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
