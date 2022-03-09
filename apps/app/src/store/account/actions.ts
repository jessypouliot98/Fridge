import { createAction } from "@reduxjs/toolkit";
import { AccountAction, AccountState } from "./types";
import { sleep } from "../../utils/common";
import LoaderModal from "../../modals/LoaderModal/LoaderModal";
import { ThunkActionCreator } from "../../utils/redux";
import { navigationRef } from "../../utils/navigation";
import { getAuthToken, createAuthUser } from "../../api/auth/auth";
import { getAuthUser } from "../../api/user/user";

export const setAccountUser = createAction<AccountState['user']>(AccountAction.SET_USER);
export const setAuthToken = createAction<AccountState['authToken']>(AccountAction.SET_AUTH_TOKEN);

export const signUp: ThunkActionCreator<[{ name: string, email: string, password: string }]> = (params) => async (dispatch) => {
  LoaderModal.open();

  const authToken = await createAuthUser(params);

  dispatch(applyAuthToken(authToken) as any);

  const user = await getAuthUser();

  dispatch(setAccountUser(user));

  LoaderModal.close();

  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export const signIn: ThunkActionCreator<[{ email: string, password: string }]> = (params) => async (dispatch) => {
  LoaderModal.open();

  const authToken = await getAuthToken(params);

  dispatch(applyAuthToken(authToken) as any);

  const user = await getAuthUser();

  dispatch(setAccountUser(user));

  LoaderModal.close();

  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export const signOut: ThunkActionCreator = () => async (dispatch) => {
  LoaderModal.open();

  await sleep(100);

  dispatch(revokeAuthToken())
  dispatch(setAccountUser(null));

  LoaderModal.close();
}

export const applyAuthToken: ThunkActionCreator<[string]> = (authToken) => (dispatch) => {
  dispatch(setAuthToken(authToken));
  // TODO Save to localStorage
}

export const revokeAuthToken: ThunkActionCreator = () => (dispatch) => {
  dispatch(setAuthToken(null));
  // TODO Delete from localStorage
}
