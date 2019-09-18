// // @ts-check

// ORIGINAL

// import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';

// export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
// export const getQuoteSuccess = quotes => {
//   return { type: GET_QUOTE_SUCCESS, quotes: quotes };
// };

// export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';
// export const getQuoteError = error => {
//   return {
//     type: GET_QUOTE_ERROR,
//     error: error
//   };
// };

// // post entries function, using addEntry action
// export const postEntry = entry => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   fetch(`${API_BASE_URL}/entries`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     },
//     body: JSON.stringify(entry)
//   })
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(entry => {
//       console.log(`entry is: ${entry._id}`);
//       dispatch(postEntrySuccess(entry)).catch(err => {
//         dispatch(postEntryError(err));
//       });
//     });
// };

// export const loadQuotes = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/quotes`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(({ quotes }) => dispatch(getQuoteSuccess(quotes)))
//     .catch(err => {
//       dispatch(getQuoteError(err));
//     });
// };

//COMBINED ACTION

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export const getQuoteSuccess = quotes => {
  return { type: GET_QUOTE_SUCCESS, quotes: quotes };
};

export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';
export const getQuoteError = error => {
  return {
    type: GET_QUOTE_ERROR,
    error: error
  };
};

export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS';
export const postEntrySuccess = entry => {
  return {
    type: POST_ENTRY_SUCCESS,
    entry: entry
  };
};

export const POST_ENTRY_ERROR = 'POST_ENTRY_ERROR';
export const postEntryError = error => {
  return {
    type: POST_ENTRY_ERROR,
    error: error
  };
};

// post entries function, using addEntry action
export const postEntry = entry => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/entries`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(entry)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(entry => dispatch(postEntrySuccess(entry)))
    .catch(err => {
      dispatch(postEntryError(err));
    });
  // .then(res => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   return res.json();
  // })
  // .then(entry => {
  //   console.log(`entry is: ${entry._id}`);
  //   dispatch(postEntrySuccess(entry)).catch(err => {
  //     dispatch(postEntryError(err));
  //   });
  // });
};

export const loadQuotes = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/quotes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ quotes }) => dispatch(getQuoteSuccess(quotes)))
    .catch(err => {
      dispatch(getQuoteError(err));
    });
};
