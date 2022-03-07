import {createAction} from "@reduxjs/toolkit";
import {AppAction, AppState} from "./types";

export const setAppLocale = createAction<AppState['lang']>(AppAction.SET_LOCALE);
