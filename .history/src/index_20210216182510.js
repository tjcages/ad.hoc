import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/Store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <script src="https://apis.google.com/js/api.js" />
  </Provider>,
  document.getElementById('root')
);
