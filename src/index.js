import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// // import store from './store';

// import * as serviceWorker from './serviceWorker';

// const rootReducer = combineReducers({
//   form: formReducer
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();
