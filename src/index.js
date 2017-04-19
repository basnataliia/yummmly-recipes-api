import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Containers/App';
import RecipeDetails from './Containers/RecipeDetails';
import './index.css';
import { RecipeReducer } from './Reducers/RecipeReducer';
import { SearchReducer } from './Reducers/SearchReducer';

injectTapEventPlugin();

const logger = createLogger();
const rootReducer = combineReducers({
  recipes: RecipeReducer,
  search: SearchReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={App}/>
        {/* <Route path='add-recipe' component={AddRecipeContainer} /> */}
        <Route path='recipes/:id' component={RecipeDetails} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
