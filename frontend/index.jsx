import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as textapi from './util/text_channel_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.textapi = textapi;
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    const preLoadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);
});
