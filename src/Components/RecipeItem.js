import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const Recipeitem = ({id, name, onSearchChange, onRecipeDelete}) => {
  return (
    <div>
      <Link to={`/recipes/${id}`} onClick={() => onSearchChange()}><span>{name}</span></Link>
      <span onClick={() => onRecipeDelete(id)}> Delete</span>
    </div>
  );
}

Recipeitem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onRecipeDelete: PropTypes.func.isRequired,
};

export default Recipeitem;
