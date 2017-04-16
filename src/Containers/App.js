import React, { Component } from 'react';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL } from '../constants/api-url';
import { connect } from 'react-redux';

import RecipeList from '../Components/RecipeList';
import RecipeSearch from '../Components/RecipeSearch';

import { RequestRecipes } from '../Actions/RecipeAction';
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
    onSearchChange: event => dispatch(setSearchTerm(event.target.value)),
    onRequestRecipes: () => dispatch(RequestRecipes),
  }
}

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   recipes: []
    // };
  }

  componentDidMount() {
    this.props.onRequestRecipes();
  }

  // onSearchChange = evt => {
  //   console.log(evt.target.value);
  // };

  render() {
    const { recipes, onSearchChange, searchTerm } = this.props;
    console.log('searchTerm', searchTerm);
    const filteredRecipes = recipes.filter(
          recipe => recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    return (
      <div>
          <RecipeSearch onSearchChange={onSearchChange}/>
          <RecipeList recipes={filteredRecipes}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
