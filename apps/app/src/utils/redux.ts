import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";

export type ThunkActionCreator<P extends any[] = [], R extends any = void> = (...params: P) => ThunkAction<R, RootState, P, AnyAction>;
