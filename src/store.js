import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import quotesReducer from './reducers/quotes-data';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    quotes: quotesReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import thunk from 'redux-thunk';
// // import { loadAuthToken } from './Local-Storage';
// // import authReducer from './reducers/auth';
// // // import protectedDataReducer from './reducers/protected-data';
// // import { setAuthToken, refreshAuthToken } from './actions/auth';

// const store = createStore(
//   combineReducers({
//     form: formReducer
//     // auth: authReducer
//     // protectedData: protectedDataReducer
//   }),
//   applyMiddleware(thunk)
// );

// // Hydrate the authToken from localStorage if it exist
// // const authToken = loadAuthToken();
// // if (authToken) {
// //   const token = authToken;
// //   store.dispatch(setAuthToken(token));
// //   store.dispatch(refreshAuthToken());
// // }

// export default store;
