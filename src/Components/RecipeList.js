import React from "react";
import { PropTypes } from 'prop-types';
import RecipeItem from './RecipeItem';


const RecipeList = ({ recipes, onSearchChange, onRecipeDelete }) => {
  const recipesArray = recipes.map(
    recipe =>
      <RecipeItem key={recipe.id}
        name={recipe.recipeName}
        id={recipe.id}
        onSearchChange={onSearchChange}
        onRecipeDelete={onRecipeDelete}/>
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
  onRecipeDelete: PropTypes.func.isRequired,
};

export default RecipeList
