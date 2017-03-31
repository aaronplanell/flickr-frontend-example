import { createStore } from 'redux';
import rootReducer from '../reducers';
import getMiddlewares from './middlewares';

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, getMiddlewares());
}
