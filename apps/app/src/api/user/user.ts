import {JSONResponse} from "../types";
import {getHeadersWithAuthorization} from "../../utils/api";
import axios from "../../utils/axios";

const routes = {
  get: {
    authUser: () => '/user/auth'
  }
}

export const getAuthUser = async () => {
  const response = await axios.get<JSONResponse<{ user: any }>>(routes.get.authUser(), {
    headers: getHeadersWithAuthorization(),
  });

  return response.data.data.user;
}
