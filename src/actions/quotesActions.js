import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export function getQuoteSuccess(quotes) {
  return { type: 'GET_QUOTE_SUCCESS', quotes };
}

export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';
export const getQuoteError = error => {
  return {
    type: 'GET_QUOTE_ERROR',
    error: error
  };
};

// export const loadQuotes = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/quotes`, {
//     method: 'GET',
//     headers: {
//       // Provide our auth token as credentials
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(quotes => {
//       console.log(quotes, 'these are quotes from quote actions');
//     })
//     .then(({ quotes }) => dispatch(getQuoteSuccess(quotes)))
//     .catch(err => {
//       dispatch(getQuoteError(err));
//     });
// };

export const loadQuotes = quotes => {
  return (dispatch, getState) => {
    // make call
    dispatch({ type: 'GET_QUOTE_SUCESSS', quotes });
  };
};

// PREVIOUS
// export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
// export function getQuoteSuccess(data) {
//   return { type: 'GET_QUOTE_SUCCESS', data };
// }

// export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';

// export const getQuoteError = error => {
//   return {
//     type: 'GET_QUOTE_ERROR',
//     error: error
//   };
// };

//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     // .then(response => {
//     //   console.log(response.quotes);
//     //   const quotes = response.quotes;
//     //   return quotes;
//     // })
//     .then(quotes => {
//       dispatch(getQuoteSuccess(quotes));
//     })
//     .catch(error => {
//       dispatch(getQuoteError(error));
//     });
// };
