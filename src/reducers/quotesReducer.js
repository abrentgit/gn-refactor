// @ts-check

// original version
// import { GET_QUOTE_SUCCESS, GET_QUOTE_ERROR } from '../actions/quotesActions';

// const initialState = {
//   quotes: [],
//   error: null
// };

// export default function quotesReducer(state = initialState, action) {
//   if (action.type === GET_QUOTE_SUCCESS) {
//     return Object.assign({}, state, {
//       quotes: action.quotes,
//       error: null
//     });
//   } else if (action.type === GET_QUOTE_ERROR) {
//     return Object.assign({}, state, {
//       error: action.error
//     });
//   }
//   return state;
// }

// make protected data reducer that takes quotes and entries

// COMBINED REDUCER

import {
  GET_QUOTE_SUCCESS,
  GET_QUOTE_ERROR,
  POST_ENTRY_ERROR,
  POST_ENTRY_SUCCESS
} from '../actions/quotesActions';
// need to import actions

const initialState = {
  quotes: [],
  quote: {
    content: null,
    author: null
  },
  entries: [],
  entry: {
    date: null,
    content: null
  },
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_QUOTE_SUCCESS) {
    return Object.assign({}, state, {
      quotes: action.quotes,
      error: null
    });
  } else if (action.type === GET_QUOTE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === POST_ENTRY_SUCCESS) {
    return Object.assign({}, state, {
      entries: action.entries,
      error: null
    });
  } else if (action.type === POST_ENTRY_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
