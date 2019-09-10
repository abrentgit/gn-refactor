import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { EntryForm } from '../components/EntryForm';

export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';
export const fetchEntriesSuccess = entries => {
  return {
    type: FETCH_ENTRIES_SUCCESS,
    entries: entries
  };
};

export const FETCH_ENTRIES_ERROR = 'FETCH_ENTRIES_ERROR';
export const fetchEntriesError = error => {
  return {
    type: FETCH_ENTRIES_ERROR,
    error: error
  };
};

export const POST_ENTRY_SUCCESS = 'ADD_ENTRY_SUCCESS';
export const postEntrySuccess = entry => {
  return {
    type: POST_ENTRY_SUCCESS,
    entry: entry
  };
};

export const POST_ENTRY_ERROR = 'ADD_ENTRY_ERROR';
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
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(entry)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(entry => {
      console.log(`entry is: ${entry._id}`);
      dispatch(postEntrySuccess(entry)).catch(err => {
        dispatch(postEntryError(err));
      });
    });
};

// get entries function
// do i create variable for current user?
// get user from auth and then pass it as a variable to the endpoint

export const fetchEntries = entries => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // grab user state first
  const user = getState().auth.currentUser;
  console.log(user, 'this is user id');

  fetch(`${API_BASE_URL}/entries/` + user, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ entries }) => dispatch(fetchEntriesSuccess(entries)))
    .catch(err => {
      dispatch(fetchEntriesError(err));
    });
};
