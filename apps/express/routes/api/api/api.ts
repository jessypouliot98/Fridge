import type { Controller } from "../../../controllers/types";

export const getVersion: Controller = (req, res) => {
  res.send('1.0.0');
}
