import axios from "../../utils/axios";
import {JSONResponse} from "../types";

const routes = {
  post: {
    createUser: () => '/auth',
    authToken: () => '/auth',
  }
}

export const createAuthUser = async (params: { name: string, email: string, password: string }) => {
  const response = await axios.post<JSONResponse<{ token: string }>>(routes.post.createUser(), params);

  return response.data.data.token;
}

export const getAuthToken = async (params: { email: string, password: string }) => {
  const response = await axios.post<JSONResponse<{ token: string }>>(routes.post.authToken(), params);

  return response.data.data.token;
}
