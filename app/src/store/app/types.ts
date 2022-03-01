import { localeType } from '../../utils/constants';

export type AppState = {
  lang: localeType,
}

export enum AppAction {
  SET_LOCALE = 'SET_APP_LOCALE',
}
