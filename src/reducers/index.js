import { combineReducers } from 'redux';
import params from './params';
import collections from './collections';

const rootReducer = combineReducers({params, collections});

export default rootReducer;
