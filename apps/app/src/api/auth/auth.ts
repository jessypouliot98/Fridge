import axios from 'axios';
import {JSONResponse} from "../types";

const HOST = 'http://localhost:3000/api';

const routes = {
  post: {
    authToken: () =>`${HOST}/auth`
  }
}

export const getAuthToken = async (params: { email: string, password: string }) => {
  const response = await axios.post<JSONResponse<{ token: string }>>(routes.post.authToken(), params);

  return response.data.data.token;
}
