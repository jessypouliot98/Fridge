import axios from 'axios';
import {JSONResponse} from "../types";
import {getHeadersWithAuthorization} from "../../utils/api";

const HOST = 'http://localhost:3000/api';

const routes = {
  get: {
    authUser: () =>`${HOST}/user/auth`
  }
}

export const getAuthUser = async () => {
  const response = await axios.get<JSONResponse<{ user: any }>>(routes.get.authUser(), {
    headers: getHeadersWithAuthorization(),
  });

  return response.data.data.user;
}
