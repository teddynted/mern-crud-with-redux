import axios from 'axios';

/* Define Action Types */
export const NEW_DIRECTORY_ENTRY = 'NEW_DIRECTORY_ENTRY';
export const DIRECTORY_LIST = 'DIRECTORY_LIST';
export const UPDATE_DIRECTORY_ENTRY = 'UPDATE_DIRECTORY_ENTRY';
export const DELETE_DIRECTORY_ENTRY = 'DELETE_DIRECTORY_ENTRY';
export const DIRECTORY_LIST_BY_ID = 'DIRECTORY_LIST_BY_ID';

/* Create a business entry */
export function newDirectoryEntry( fields ){
   const request = axios.post('/create', fields );
   return {
      type: NEW_DIRECTORY_ENTRY,
      payload: request
   }
}

/* Retrieve all businesses */
export function directoryList(){
   const request = axios.get('/read');
   return {
      type: DIRECTORY_LIST,
      payload: request
   }
}

/* Retrieve a single record by  id */
export function directoryListById( id ){
   const request = axios.get('/readbyid/', { params: { id: id } });
   return {
      type: DIRECTORY_LIST_BY_ID,
      payload: request
   }
}

/* Update business information */
export function updateDirectoryEntry( fields ){
   const request = axios.put('/update', fields );
   return {
      type: UPDATE_DIRECTORY_ENTRY,
      payload: request
   }
}

/* Delete an entry by id */
export function deleteDirectoryEntry( entryid ){
   const request = axios.delete('/delete', { params : { entryid: entryid } } );
   return {
      type: DELETE_DIRECTORY_ENTRY,
      payload: request
   }
}