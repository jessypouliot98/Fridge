import { RootState } from './..';

export const selectLocale = () => (state: RootState) => {
  return state.appState.lang;
};
