import { GET_QUOTE_SUCCESS } from '../actions/quotesActions';
const initialState = {
  quotes: [{ id: '1', author: 'Philly', content: 'wonderwall is' }],
  error: null
};

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE_SUCCESS:
      console.log('quotes reducer is hitting?');
  }
  return state;
}
