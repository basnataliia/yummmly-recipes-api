import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeList from '../Components/RecipeList';
import RecipeSearch from '../Components/RecipeSearch';

import { RequestRecipes, deleteRecipe, onUpdateClick, saveUpdate } from '../Actions/RecipeAction';
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
    onUpdateClick: (x) => dispatch(onUpdateClick(x)),
    onSaveUpdate: (recipeId, name) => dispatch(saveUpdate(recipeId, name)),
  }
}

class App extends Component {
  componentWillMount() {
    this.props.onRequestRecipes();
  }


  render() {
    const { recipes, onSearchChange, searchTerm, onRecipeDelete, onUpdateClick, onSaveUpdate } = this.props;
    const filteredRecipes = recipes.filter(recipe => recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div>
          <RecipeSearch onSearchChange={onSearchChange}/>
          <RecipeList recipes={filteredRecipes}
                onSearchChange={onSearchChange}
                onRecipeDelete={onRecipeDelete}
                onUpdateClick={onUpdateClick}
                onSaveUpdate={onSaveUpdate}
              />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
