import { RootState } from './..';

export const selectUser = () => (state: RootState) => {
  return state.accountState.user;
};
