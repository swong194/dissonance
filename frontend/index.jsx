import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as textactions from './actions/text_channel_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    const preLoadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.textactions = textactions;

  ReactDOM.render(<Root store={store}/>, root);
});
