import { combineReducers } from 'redux';
import alert from './alert';
import photosets from './photosets';
import params from './params';
import photos from './photos';

const rootReducer = combineReducers({alert, photosets, params, photos});

export default rootReducer;
