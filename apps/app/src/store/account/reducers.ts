import { createReducer } from '@reduxjs/toolkit';
import { AccountState } from './types';
import { setAccountUser } from "./actions";

export const initialState: AccountState = {
  user: null,
  authToken: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAccountUser, (state, action) => {
      state.user = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
