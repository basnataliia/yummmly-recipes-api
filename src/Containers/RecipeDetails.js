import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecipeById } from '../Actions/RecipeAction';
import IngredientsList from '../Components/IngredientsList';

const mapStateToProps = state => {
  return {
    recipeDetails: state.recipes.recipeDetails,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayRecipe: (recipeId) => dispatch(GetRecipeById(recipeId)),
  }
}

class App extends Component {
  componentDidMount() {
    this.props.displayRecipe(this.props.params.id);
  }

  render() {
    const {recipeDetails} = this.props;
    if(recipeDetails.ingredientLines) {
      return (
        <div>
          {recipeDetails.name}
          <IngredientsList ingredients={recipeDetails.ingredientLines}/>
        </div>
      );
    }
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
