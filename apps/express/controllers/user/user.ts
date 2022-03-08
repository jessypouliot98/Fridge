import {Controller} from "../types";
import {AUTH_HEADER_PARAM} from "../../middlewares";
import {respondWithError, respondWithJSON} from "../../utils/response";
import {getFakeUser} from "./utils";

export const getAuthUser: Controller = (req, res) => {
  const bearerToken = req.header(AUTH_HEADER_PARAM) || '';

  if (!/Bearer \w+/.test(bearerToken)) {
    return respondWithError(
      res,
      {
        status: 403,
        message: 'Invalid bearer token',
      }
    )
  }

  return respondWithJSON(
    res,
    {
      user: getFakeUser(),
    },
  );
}
