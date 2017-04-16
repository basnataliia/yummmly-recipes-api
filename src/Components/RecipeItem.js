import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const Recipeitem = ({id, name, onSearchChange}) => {
  return (
    <div>
      <Link to={`/recipes/${id}`} onClick={() => onSearchChange()}><span>{name}</span></Link>
    </div>
  );
}

Recipeitem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Recipeitem;
