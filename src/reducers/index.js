import { combineReducers } from 'redux';
import alert from './alert';
import collections from './collections';

const rootReducer = combineReducers({alert, collections});

export default rootReducer;
