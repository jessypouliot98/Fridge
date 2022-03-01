import { combineReducers, createStore } from 'redux';

import appReducer from './app/reducers';
import recipeReducer from './recipe/reducers';

const store = createStore(
  combineReducers({
    appState: appReducer,
    recipeState: recipeReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
