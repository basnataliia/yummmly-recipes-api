import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import RecipeName from './RecipeName';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './RecipeItem.css';

const Recipeitem = ({id, name, imageUrlsBySize, recipeIngredients, onSearchChange, onRecipeDelete, onUpdateClick, showUpdate, onSaveUpdate}) => {
  let imgSrc = '';
  let ingredients = '';

  if(imageUrlsBySize) {
    imgSrc = imageUrlsBySize[90];
    let n = imgSrc.indexOf('=');
    imgSrc = imgSrc.substring(0, n !== -1 ? n : imgSrc.length);
    imgSrc = `${imgSrc}=s320-c-e365`;
  } else {
    imgSrc = 'http://i.imgur.com/gUv5Ne4.png';
  }

  if(recipeIngredients) {
    ingredients = recipeIngredients;
    ingredients = ingredients.join(', ');
  }

  return (
    <GridTile
          style={{width:'320px', height:'320px', margin:'20px', boxShadow: '0 5px 15px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'}}
          key={name}
          title={<RecipeName id={id} name={name} onUpdateClick={onUpdateClick} showUpdate={showUpdate} onSaveUpdate={onSaveUpdate}/>}
          subtitle={<span><b>{ingredients}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={name ? 2 : 1}
          rows={name ? 2 : 1}
          >
            <img src={imgSrc} alt={name}/>
              <Link to={`/recipes/${id}`} onClick={() => onSearchChange()} className='ViewRecipe'>View</Link>
              <a className='DeleteRecipe'
                    onClick={(e) => {
                      e.preventDefault();
                      onRecipeDelete(id);
                    }
                  }
              >Delete</a>
        </GridTile>
  );
}

Recipeitem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrlsBySize: PropTypes.object,
  recipeIngredients: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onRecipeDelete: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  showUpdate: PropTypes.bool,
  onSaveUpdate: PropTypes.func.isRequired,
};

export default Recipeitem;
