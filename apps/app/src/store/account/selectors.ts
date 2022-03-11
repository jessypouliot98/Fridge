import { RootSelector } from "../../utils/redux";

export const selectIsLoggedIn: RootSelector = () => (state) => {
  return state.accountState.user !== null;
};

export const selectAuthUser: RootSelector = () => (state) => {
  return state.accountState.user;
};
