import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadQuotes } from './actions/quotesActions';
import App from './components/app';
import store from './store';
import './index.css';

store.dispatch(loadQuotes());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
