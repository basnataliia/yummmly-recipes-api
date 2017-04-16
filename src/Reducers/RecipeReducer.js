import { REQUEST_RECIPES_SUCCESS, REQUEST_RECIPES_ERROR } from '../Actions/ActionTypes';


const recipesInitialState = {
  recipes: [],
  error: undefined
}

export const RecipeReducer = (state = recipesInitialState, action={}) => {
  switch(action.type){
    case REQUEST_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.payload});
    case REQUEST_RECIPES_ERROR:
        return Object.assign({}, state, {error: action.payload});
    default:
        return state;
  }
}
