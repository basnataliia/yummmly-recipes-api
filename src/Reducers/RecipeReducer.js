import { REQUEST_RECIPES_SUCCESS,
         REQUEST_RECIPES_ERROR,
         GET_RECIPE_BY_ID } from '../Actions/ActionTypes';


const recipesInitialState = {
  recipes: [],
  error: undefined,
  recipeDetails: {},
}

export const RecipeReducer = (state = recipesInitialState, action={}) => {
  switch(action.type){
    case REQUEST_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.payload});
    case REQUEST_RECIPES_ERROR:
        return Object.assign({}, state, {error: action.payload});
    case GET_RECIPE_BY_ID:
        return Object.assign({}, state, {recipeDetails: action.payload});
    default:
        return state;
  }
}
