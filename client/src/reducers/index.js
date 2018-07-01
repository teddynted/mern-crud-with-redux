import { NEW_DIRECTORY_ENTRY, DIRECTORY_LIST, UPDATE_DIRECTORY_ENTRY, DELETE_DIRECTORY_ENTRY, DIRECTORY_LIST_BY_ID } from '../actions/index';

/* 
  The reducer is a pure function that takes the previous state and an action, 
  and returns the next state. 
*/
export default function( state = [], action ) {
    switch(action.type){
      case NEW_DIRECTORY_ENTRY:
        return { ...state, directory: action.payload };
      case DIRECTORY_LIST:
        return { ...state, directory: action.payload };
      case DIRECTORY_LIST_BY_ID:
        return { ...state, directory: action.payload };
      case UPDATE_DIRECTORY_ENTRY:
        return { ...state, directory: action.payload };
      case DELETE_DIRECTORY_ENTRY:
        return { ...state, directory: action.payload };
      default:
        return state;
    }
}