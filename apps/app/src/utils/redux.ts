import { RootState } from "../store";
import { AnyAction } from "redux";
import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";

export type ThunkActionCreator<R extends any = void> = ActionCreator<ThunkAction<R, RootState, unknown, AnyAction>>;
