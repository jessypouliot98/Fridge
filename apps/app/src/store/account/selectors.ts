import { RootSelector } from "../../utils/redux";

export const selectIsLoggedIn: RootSelector = () => (state) => {
  return state.accountState.user !== null;
};

export const selectUser: RootSelector = () => (state) => {
  return state.accountState.user;
};
