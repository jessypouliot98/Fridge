import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";

export type RootSelector<R = any> = () => (state: RootState) => boolean;

export type ThunkActionCreator<P extends any[] = [], R extends any = void> = (...params: P) => ThunkAction<R, RootState, P, AnyAction>;
