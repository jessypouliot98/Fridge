export type AccountState = {
  user: null | {},
  authToken: null | string,
}

export enum AccountAction {
  SET_USER = 'SET_USER',
  SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
}
