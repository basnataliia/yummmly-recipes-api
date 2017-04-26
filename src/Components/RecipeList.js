import React from "react";
import { PropTypes } from 'prop-types';
import RecipeItem from './RecipeItem';

const RecipeList = ({recipes, onSearchChange, onRecipeDelete, onUpdateClick , onSaveUpdate, showUpdate}) => {
  const recipesArray = recipes.map(
    recipe => {
        return (
          <RecipeItem
                  key={recipe.id}
                  name={recipe.recipeName}
                  id={recipe.id}
                  recipeIngredients={recipe.ingredients}
                  imageUrlsBySize={recipe.imageUrlsBySize}
                  onSearchChange={onSearchChange}
                  onRecipeDelete={onRecipeDelete}
                  onUpdateClick={onUpdateClick}
                  onSaveUpdate={onSaveUpdate}
                  showUpdate={recipe.showUpdate}
                />
              );
           }
       );

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {recipesArray}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onRecipeDelete: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onSaveUpdate: PropTypes.func.isRequired,
  showUpdate: PropTypes.bool,
};

export default RecipeList
