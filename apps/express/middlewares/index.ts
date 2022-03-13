import type { Middleware } from "./types";

export const DEFAULT_LOCALE = 'en-CA';
export const AUTH_HEADER_PARAM = 'authorization';
export const LOCALE_HEADER_PARAM = 'x-api-locale';

export const authMiddleware: Middleware = () => (req, res, next) => {
  const authorization = req.header(AUTH_HEADER_PARAM);
  const token = authorization?.substring(0, 'Bearer '.length);

  console.log({ token });

  next();
}

export const localeHeaderMiddleware: Middleware = () => (req, res, next) => {
  req.body.locale = req.header(LOCALE_HEADER_PARAM) || DEFAULT_LOCALE;

  next();
}

export const throttleMiddleware: Middleware = () => (req, res, next) => {
  setTimeout(next, 1000);
}
