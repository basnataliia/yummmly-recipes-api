import React, { Component } from 'react';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL } from '../constants/api-url';
import RecipeList from '../Components/RecipeList';
import { connect } from 'react-redux';
import { RequestRecipes } from '../Actions/RecipeAction';

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    error: state.recipes.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onSearchChange: event => dispatch(setSearchTerm(event.target.value)),
    onRequestRecipes: () => dispatch(RequestRecipes),
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.props.onRequestRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
          <RecipeList recipes={recipes}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
