import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './Containers/App';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    {/* <Route path='add-recipe' component={AddRecipeContainer} /> */}
    {/* <Route path='recipes/:id' component={RecipeDetails} /> */}
  </Router>,
  document.getElementById('root')
);
