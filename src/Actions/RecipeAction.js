import { REQUEST_RECIPES_SUCCESS,
         REQUEST_RECIPES_ERROR,
         GET_RECIPE_BY_ID,
         DELETE_RECIPE,
         UPDATE_CLICK,
         SAVE_UPDATE
        } from './ActionTypes';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL, GET_RECIPE_BY_ID_URL, APP_ID, APP_KEY } from '../constants/api-url';

export const RequestRecipes = (dispatch) => {
  //fire an API request, upon success fire a success function
  apiCall(GET_ALL_RECIPES_URL)
    .then(response => dispatch({
      type: REQUEST_RECIPES_SUCCESS,
      payload: response.matches
    }))
      //on error we dispatch an error
    .catch(error => dispatch({
      type: REQUEST_RECIPES_ERROR,
      payload: error
    }))
 };


 export function getRecipe(details) {
  return {
    type: GET_RECIPE_BY_ID,
    payload: details,
  };
}

export function deleteRecipe(recipeId) {
 return {
   type: DELETE_RECIPE,
   payload: recipeId,
 };
}

export function GetRecipeById(recipeId) {
  const url = GET_RECIPE_BY_ID_URL + `${recipeId}?_app_id=${APP_ID}&_app_key=${APP_KEY}`;
  return dispatch => {
    apiCall(url)
      .then(response => {
        dispatch(getRecipe(response));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function onUpdateClick(recipeId) {
  return {
    type: UPDATE_CLICK,
    payload: recipeId,
  };
}

export function saveUpdate(recipeId, name) {
  return {
    type: SAVE_UPDATE,
    payload: {
      recipeId: recipeId,
      name: name
    },
  };
}
