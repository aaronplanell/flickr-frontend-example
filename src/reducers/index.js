import { combineReducers } from 'redux';
import alert from './alert';
import collections from './collections';
import params from './params';
import photos from './photos';

const rootReducer = combineReducers({alert, collections, params, photos});

export default rootReducer;
