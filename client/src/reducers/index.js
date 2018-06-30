import { combineReducers } from 'redux';
import directoryReducer from './directory';

const rootReducer = combineReducers({
    directory: directoryReducer
});

export default rootReducer;