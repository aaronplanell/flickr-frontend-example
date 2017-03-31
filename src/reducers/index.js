import { combineReducers } from 'redux';
import params from './params';
import galleries from './galleries';

const rootReducer = combineReducers({params, galleries});

export default rootReducer;
