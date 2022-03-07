import { RootState } from './..';

export const selectIsLoggedIn = () => (state: RootState) => {
  return state.accountState.user !== null;
};

export const selectUser = () => (state: RootState) => {
  return state.accountState.user;
};
