import React, { Component } from 'react';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL } from '../constants/api-url';
import { connect } from 'react-redux';

import RecipeList from '../Components/RecipeList';
import RecipeSearch from '../Components/RecipeSearch';

import { RequestRecipes, deleteRecipe } from '../Actions/RecipeAction';
import { setSearchTerm } from '../Actions/SearchAction';

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    error: state.recipes.error,
    searchTerm: state.search.searchTerm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      event ? dispatch(setSearchTerm(event.target.value)) : dispatch(setSearchTerm(''))
    },
    onRequestRecipes: () => dispatch(RequestRecipes),
    onRecipeDelete: (x) => dispatch(deleteRecipe(x)),
  }
}

class App extends Component {
  componentWillMount() {
    this.props.onRequestRecipes();
  }

  render() {
    const { recipes, onSearchChange, searchTerm, onRecipeDelete } = this.props;
    const filteredRecipes = recipes.filter(
          recipe => recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    return (
      <div>
          <RecipeSearch onSearchChange={onSearchChange}/>
          <RecipeList recipes={filteredRecipes} onSearchChange={onSearchChange} onRecipeDelete={onRecipeDelete}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
