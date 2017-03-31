import { combineReducers } from 'redux';
import alert from './alert';
import collections from './collections';
import params from './params';

const rootReducer = combineReducers({alert, collections, params});

export default rootReducer;
