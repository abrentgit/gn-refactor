import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import quoteReducer from './reducers/quotesReducer';
// import quotesReducer from './reducers/quotesReducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    quotes: quoteReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
