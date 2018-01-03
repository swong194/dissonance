import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as serverAction from './actions/server_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.serverAction = serverAction;
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
