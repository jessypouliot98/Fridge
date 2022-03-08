import {Request, Response} from "express";

export type Controller = (
  req: Request<Record<string, string>, any, any, Record<string, string>>,
  res: Response,
) => void;
