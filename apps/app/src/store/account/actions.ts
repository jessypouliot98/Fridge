import { createAction } from "@reduxjs/toolkit";
import { AccountAction, AccountState } from "./types";
import { sleep } from "../../utils/common";
import LoaderModal from "../../modals/LoaderModal/LoaderModal";
import { ThunkActionCreator } from "../../utils/redux";
import { navigationRef } from "../../utils/navigation";

export const setAccountUser = createAction<AccountState['user']>(AccountAction.SET_USER);

export const signIn: ThunkActionCreator = () => async (dispatch) => {
  LoaderModal.open();
  await sleep(1000);
  dispatch(setAccountUser({}));
  LoaderModal.close();
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export const signOut: ThunkActionCreator = () => async (dispatch) => {
  LoaderModal.open();
  await sleep(1000);
  dispatch(setAccountUser(null));
  LoaderModal.close();
}
