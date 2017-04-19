import {SET_SEARCH_TERM} from  '../Actions/ActionTypes';

const searchInitialState = {
  searchTerm: '',
}

export const SearchReducer = (state = searchInitialState, action={}) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
        return Object.assign({}, state, {searchTerm: action.payload})
    default:
        return state;
  }
}
