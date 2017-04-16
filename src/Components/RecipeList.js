import React from "react";
import { PropTypes } from 'prop-types';
import RecipeItem from './RecipeItem';


const RecipeList = ({ recipes }) => {
  const recipesArray = recipes.map(
    recipe =>
      <RecipeItem key={recipe.id} name={recipe.recipeName} />
  );

  return (
    <div>
      { recipesArray }
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList
