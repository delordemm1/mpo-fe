import Axios, { AxiosStatic } from "axios";
import Cookies from "js-cookie";

class Client {
  axios = Axios;

  constructor() {
    this.axios.defaults.baseURL = "http://localhost:3000";
  }

  create = () => {
    return this.axios;
  };

  createWithAuth = () => {
    const access_token = Cookies.get("access-token");

    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${access_token}`;

    return this.axios;
  };
}

export default new Client().create();
export const AuthClient = new Client().createWithAuth;
