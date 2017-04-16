import { SET_SEARCH_TERM } from './ActionTypes';

export const setSearchTerm = (text) => ({
  type: SET_SEARCH_TERM,
  payload: text,
});
