// @flow
import {observable, action, decorate} from "mobx";
import api from "../services/api";

export const TOKEN_KEY = "@shower-token";

class SessionStore {

  authenticated: boolean = false;
  loading: boolean = true;

  isAuthenticated = () => {
    this.authenticated = false;
    this.loading = true;
    localStorage.removeItem(TOKEN_KEY);
    console.log(localStorage.getItem(TOKEN_KEY));
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      console.log("aee");
      this.authenticated = true;
    } else {
      this.getAuthToken().then((token) => {
        if (token.data === undefined) {
          console.log("return false");
          this.authenticated = false;
        } else {
          console.log("return true");
          localStorage.setItem(TOKEN_KEY, token);
          this.authenticated = true;
        }
        this.loading = false;
      }).catch((err) => {
        console.log(err);
        this.authenticated = false;
        this.loading = false;
      })
    }
  };

  getAuthToken(): any {
    return api.get("/auth/testToken");
  }
}

decorate(SessionStore, {
  authenticated: observable,
  isAuthenticated: action,
  getAuthToken: action,
  loading: observable
});

export default new SessionStore();
