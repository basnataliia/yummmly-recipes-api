import React from 'react';
import { PropTypes } from 'prop-types';

const IngredientsList = ({ingredients}) => {
  const ingredientsLi = ingredients.map((ingredient, index) => {
    return (
      <li key={index}>{ingredient}</li>
    );
  });

  return (
    <ul>{ingredientsLi}</ul>
  )
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;
