import React from "react";
import { PropTypes } from 'prop-types';
import RecipeItem from './RecipeItem';
import RecipeUpdate from './RecipeUpdate';


const RecipeList = ({ recipes, onSearchChange, onRecipeDelete, onUpdateClick , onSaveUpdate}) => {
  const recipesArray = recipes.map(
    recipe => {
      if(recipe.showUpdate) {
        return <RecipeUpdate
                    key={recipe.id}
                    name={recipe.recipeName}
                    id={recipe.id}
                    recipeIngredients={recipe.ingredients}
                    imageUrlsBySize={recipe.imageUrlsBySize}
                    onSaveUpdate={onSaveUpdate}/>;
      } else {
        return <RecipeItem key={recipe.id}
                  name={recipe.recipeName}
                  id={recipe.id}
                  recipeIngredients={recipe.ingredients}
                  imageUrlsBySize={recipe.imageUrlsBySize}
                  onSearchChange={onSearchChange}
                  onRecipeDelete={onRecipeDelete}
                  onUpdateClick={onUpdateClick}
                />;
      }
    }
  );

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center'}}>
      { recipesArray }
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onRecipeDelete: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onSaveUpdate: PropTypes.func.isRequired,
};

export default RecipeList
