import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Pencil from 'material-ui/svg-icons/content/create';

const Recipeitem = ({ id, name, imageUrlsBySize, recipeIngredients, onSearchChange, onRecipeDelete, onUpdateClick }) => {
  let imgSrc = '';
  let ingredients = '';
  if(imageUrlsBySize) {
    imgSrc = imageUrlsBySize[90];
    let n = imgSrc.indexOf('=');
    imgSrc = imgSrc.substring(0, n !== -1 ? n : imgSrc.length);
    imgSrc = `${imgSrc}=s320-c-e365`;
  }
  else {
    imgSrc = 'http://i.imgur.com/gUv5Ne4.png';
  }

  if(recipeIngredients){
    ingredients = recipeIngredients;
    ingredients = ingredients.join(', ');
  }
  return (
    // <div>
    //   <Link to={`/recipes/${id}`} onClick={() => onSearchChange()}><span>{name}</span></Link>
    //   <span onClick={() => onRecipeDelete(id)}> Delete</span>
    //   <span onClick={() => onUpdateClick(id)}> Update</span>
    // </div>
    <Link to={`/recipes/${id}`} onClick={() => onSearchChange()}>
    <GridTile
          style={{width:'320px', height:'320px', margin:'20px', boxShadow: '0 5px 15px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'}}
          key={ name }
          title={<div><span>{ name }</span><Pencil color="white" style={{marginLeft: '10px', width: '15', height: '1'}} onClick={(e) => {
            e.preventDefault();
            onUpdateClick(id)
           }
          } /></div>}
          subtitle={<span><b>{ ingredients }</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={ name ? 2 : 1 }
          rows={ name ? 2 : 1 }
          >
            <img src={ imgSrc } alt={ name }/>
            <div style={{position:'absolute', backgroundColor: 'rgba(0,0,0,0.3)', bottom:'5px', width:'67px', 'height':'30px', right:'15px'}}>
              <a className="deleteRecipeLink"
                    onClick={(e) => {
                      e.preventDefault();
                      onRecipeDelete(id);
                    }
                  }
                style={{position:'absolute', color:'white', bottom:'5px', right:'10px', zIndex:'1000', textDecoration:'underline'}}>Delete</a>
            </div>
        </GridTile>
      </Link>
  );
}

Recipeitem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onRecipeDelete: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
};

export default Recipeitem;
