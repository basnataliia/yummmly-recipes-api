import React, { Component } from 'react';
import { apiCall } from '../api/api';
import { GET_ALL_RECIPES_URL } from '../constants/api-url';
import RecipeList from '../Components/RecipeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    apiCall(GET_ALL_RECIPES_URL).then(
      response => this.setState(
        { recipes: response.matches }
      )
    );
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
          <RecipeList recipes={recipes}/>
      </div>
    );
  }
}

export default App;
