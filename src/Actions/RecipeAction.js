import { REQUEST_RECIPES_SUCCESS, REQUEST_RECIPES_ERROR } from './ActionTypes';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL } from '../constants/api-url';

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
 }
