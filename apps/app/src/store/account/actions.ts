import {createAction} from "@reduxjs/toolkit";
import {AccountAction, AccountState} from "./types";
import {sleep} from "../../utils/common";
import LoaderModal from "../../modals/LoaderModal/LoaderModal";
import {ThunkActionCreator} from "../../utils/redux";
import {navigationRef} from "../../utils/navigation";
import {createAuthUser, getAuthToken} from "../../api/auth/auth";
import {getAuthUser} from "../../api/user/user";
import {removeFromStorage, saveToStorage, StorageKeys} from "../../utils/storage";

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

export const applyAuthToken: ThunkActionCreator<[string]> = (authToken) => async (dispatch) => {
  dispatch(setAuthToken(authToken));
  await saveToStorage(StorageKeys.authToken, authToken);
}

export const revokeAuthToken: ThunkActionCreator = () => async (dispatch) => {
  dispatch(setAuthToken(null));
  await removeFromStorage(StorageKeys.authToken);
}
