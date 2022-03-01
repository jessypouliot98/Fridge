import { createAction, createReducer } from '@reduxjs/toolkit';

import { DEFAULT_LOCALE } from './../../utils/constants';

import { AppAction, AppState } from './types';

export const initialState: AppState = {
  lang: DEFAULT_LOCALE,
};

export const setAppLocale = createAction<AppState['lang']>(AppAction.SET_LOCALE);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAppLocale, (state, action) => {
      state.lang = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
