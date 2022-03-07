import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_LOCALE } from './../../utils/constants';
import { AppState } from './types';
import {setAppLocale} from "./actions";

export const initialState: AppState = {
  lang: DEFAULT_LOCALE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAppLocale, (state, action) => {
      state.lang = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
