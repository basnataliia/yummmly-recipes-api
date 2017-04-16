import React from "react";
import { PropTypes } from 'prop-types';
import RecipeItem from './RecipeItem';


const RecipeList = ({ recipes, onSearchChange }) => {
  const recipesArray = recipes.map(
    recipe =>
      <RecipeItem key={recipe.id} name={recipe.recipeName} id={recipe.id} onSearchChange={onSearchChange}/>
  );

  return (
    <div>
      { recipesArray }
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default RecipeList
