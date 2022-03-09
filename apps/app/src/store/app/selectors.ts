import { RootSelector } from "../../utils/redux";

export const selectLocale: RootSelector = () => (state) => {
  return state.appState.lang;
};
