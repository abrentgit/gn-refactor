// @ts-check

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
