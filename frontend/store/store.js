import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preLoadedState = {}) => {
  return createStore(
    RootReducer,
    preLoadedState,
    applyMiddleware(thunk));
};

export default configureStore;
