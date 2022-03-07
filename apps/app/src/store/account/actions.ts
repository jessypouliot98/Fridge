import {createAction} from "@reduxjs/toolkit";
import {AccountAction, AccountState} from "./types";

export const setAccountUser = createAction<AccountState['user']>(AccountAction.SET_USER);
