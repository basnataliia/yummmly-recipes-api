import { REQUEST_RECIPES_SUCCESS,
         REQUEST_RECIPES_ERROR,
         GET_RECIPE_BY_ID,
         DELETE_RECIPE,
         UPDATE_CLICK,
         SAVE_UPDATE
        } from '../Actions/ActionTypes';


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

    case DELETE_RECIPE:
        let newRecipes = state.recipes.filter(recipe => recipe.id !== action.payload);
        return Object.assign({}, state, {recipes: newRecipes});

    case UPDATE_CLICK:
        let updatedRecipesList = state.recipes.map(recipe => {
            if(recipe.id === action.payload) {
              recipe.showUpdate = true;
              return recipe;
            } else {
              return recipe;
            }
          });
        return Object.assign({}, state, {recipes: updatedRecipesList});

     case SAVE_UPDATE:
        let updatedRecipes = state.recipes.map(recipe => {
            if(recipe.id === action.payload.recipeId) {
              return Object.assign({}, recipe, {recipeName: action.payload.name, showUpdate: false})
            }
            return recipe;
        });
        return Object.assign({}, state, {recipes: updatedRecipes});

    default:
        return state;
  }
}
