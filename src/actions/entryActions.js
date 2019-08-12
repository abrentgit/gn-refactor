import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';

// CREATE A FETCH ENTRY PAGE BOARD ACTION, SUCCESS, ERROR AND REDUCER
// const fetchEntryPage /

export const postEntry = entry => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // const user = getState().auth.currentUser.username;
  fetch(`${API_BASE_URL}/entries`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
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
      // ** PUT THIS BACK IN
      // dispatch(fetchEntryPage(entry)); ///dispatch show new entry action on a success post page after posted
    });
};
