import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';

// QUOTE ACTIONS

export const GET_QUOTE = 'GET_QUOTE';
export const getQuote = quote => {
  return {
    type: 'GET_QUOTE',
    quote: quote
  };
};

export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';
export const getQuoteError = error => {
  return {
    type: 'GET_QUOTE_ERROR',
    error: error
  };
};

export const fetchQuotes = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/quotes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(quote => {
      dispatch(getQuote(quote));
    });
};
