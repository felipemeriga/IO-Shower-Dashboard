// @flow
import api from "../services/api";

export const TOKEN_KEY = "@shower-token";



function getAuthToken(): any {
  return api.get("/auth/testToken");
}

export default getAuthToken;
