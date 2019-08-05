import { GET_QUOTE, GET_QUOTE_ERROR } from '../actions/quotes';

export default function quoteReducer(state = [], action) {
  switch (action.type) {
    case GET_QUOTE:
      return [...state, action.quote];
    case GET_QUOTE_ERROR:
      return [...state, action.error];
    default:
      return state;
  }
}
