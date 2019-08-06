import { GET_QUOTE, GET_QUOTE_ERROR } from '../actions/quotes';

const initialState = {
  quotes: '',
  error: ''
};

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE:
      return { ...state, quotes: action.quote };
    case GET_QUOTE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
