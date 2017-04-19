import React from 'react';
import { PropTypes } from 'prop-types';
import Pencil from 'material-ui/svg-icons/content/create';

const RecipeName = ({ id, name, onUpdateClick, showUpdate, onSaveUpdate }) => {
  let recipeNewName= '';
  if(showUpdate) {
    return (
      <form onSubmit={() => onSaveUpdate(id, recipeNewName)}>
         <input name="recipeName" type="text" defaultValue={name} onChange={(e) => recipeNewName = e.target.value} />
         <button type="submit">Save</button>
     </form>
    );
  }
  return (
        <div>
          <span>{ name }</span><Pencil color="white" style={{marginLeft: '10px', width: '15px', height: '15px'}} onClick={(e) => {
            e.preventDefault();
            onUpdateClick(id)}
          } />
        </div>
  );
}

RecipeName.propTypes = {
  name: PropTypes.string.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
};

export default RecipeName;
