import React from 'react';
import { PropTypes } from 'prop-types';

const RecipeSearch = ({ onSearchChange }) => {
  return (
    <div>
    <input onChange={(e) => onSearchChange(e)}/>
    </div>
  );
}
RecipeSearch.propTypes = { onSearchChange: PropTypes.func.isRequired };
export default RecipeSearch;
