import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ServerAPIUtil from './util/server_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.ServerAPIUtil = ServerAPIUtil;
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
