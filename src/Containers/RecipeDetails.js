import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecipeById } from '../Actions/RecipeAction';


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
    const { recipeDetails } = this.props;
    console.log('recipeDetails', recipeDetails);
    return (
      <div>
        { recipeDetails.name }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
