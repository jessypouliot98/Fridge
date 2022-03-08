import {Controller} from "../types";
import {respondWithError, respondWithJSON} from "../../utils/response";

export const getBearerToken: Controller = (req, res) => {
  const { email, password } = req.body;

  if (!/@gmail\.com/.test(email) || `${password}`.length <= 3) {
    return respondWithError(
      res,
      {
        status: 403,
        message: 'Invalid email or password',
      }
    )
  }

  return respondWithJSON(
    res,
    { token: 'Bearer asdaskldklaj' },
  );
}
