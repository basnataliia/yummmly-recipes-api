import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const RecipeUpdate = ({id, name, onSaveUpdate}) => {
  let recipeNewName= '';
  return (

     <form onSubmit={() => onSaveUpdate(id, recipeNewName)}>
        <input name="recipeName" type="text" defaultValue={name} onChange={(e) => recipeNewName = e.target.value} />
        <button type="submit">Save</button>
    </form>
  );
}

// Recipeitem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   onSearchChange: PropTypes.func.isRequired,
//   onRecipeDelete: PropTypes.func.isRequired,
//   onUpdateClick: PropTypes.func.isRequired,
// };

export default RecipeUpdate;
