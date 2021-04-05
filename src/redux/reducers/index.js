import { combineReducers } from 'redux';
import allGistsReducer from './allGistsReducer';
import singleGistReducer from './singleGistReducer';

const rootReducer = combineReducers({allGistsReducer, singleGistReducer});
export default rootReducer;