import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

// FETCH PROTECTED DATA TEMPLATE

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/protected`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

// FETCH QUOTES

// export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
// export const fetchQuotesSuccess = quotes => ({
//   type: FETCH_QUOTES_SUCCESS,
//   quotes
// });

// export const FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR';
// export const fetchQuotesError = error => ({
//   type: FETCH_QUOTES_ERROR,
//   error
// });

// export const fetchQuotes = () => (dispatch, getState) => {
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
//     .then(({ quotes }) => dispatch(fetchQuotesSuccess(quotes)))
//     .catch(err => {
//       dispatch(fetchQuotesError(err));
//     });
// };
