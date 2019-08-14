// @ts-check

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import quotesReducer from './reducers/quotesReducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import entriesReducer from './reducers/entriesReducer';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    quotes: quotesReducer,
    entries: entriesReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
