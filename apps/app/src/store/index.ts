import { combineReducers, createStore } from 'redux';

import appReducer from './app/reducers';
import accountReducer from './account/reducers';
import recipeReducer from './recipe/reducers';

const store = createStore(
  combineReducers({
    appState: appReducer,
    accountState: accountReducer,
    recipeState: recipeReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
