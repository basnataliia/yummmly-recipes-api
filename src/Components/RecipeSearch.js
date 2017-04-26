import React from 'react';
import { PropTypes } from 'prop-types';
import TextField from 'material-ui/TextField';

const RecipeSearch = ({onSearchChange}) => {
  return (
    <div style={{textAlign:'center'}}>
      <TextField hintText="Search..." onChange={(e) => onSearchChange(e)}/>
    </div>
  );
}
RecipeSearch.propTypes = {onSearchChange: PropTypes.func.isRequired};
export default RecipeSearch;
