import { GET_QUOTE_SUCCESS } from '../actions/quotesActions';
const initialState = {
  quotes: [],
  error: null
};

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE_SUCCESS:
      console.log('quotes reducer is hitting?');
  }
  return state;
}
