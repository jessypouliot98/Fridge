import {Response} from "express";

type BasicParams = {
  status?: number,
}

type ErrorParams = BasicParams & {
  message?: string,
}

export const respondWithJSON = <T = any>(res: Response, body: T, params: BasicParams = {}) => {
  const { status = 200 } = params;

  res
    .status(status)
    .json({
      isOk: true,
      data: body,
    });
}

export const respondWithError = <T = any>(res: Response, params: ErrorParams = {}) => {
  const { status = 400, message = 'An error has occured' } = params;

  res
    .status(status)
    .json({
      isOk: false,
      message,
    });
}
