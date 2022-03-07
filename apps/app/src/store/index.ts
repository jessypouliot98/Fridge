import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app/reducers';
import accountReducer from './account/reducers';
import recipeReducer from './recipe/reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    appState: appReducer,
    accountState: accountReducer,
    recipeState: recipeReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
