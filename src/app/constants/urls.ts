import {environment} from "../../environments/environment";

const {baseURL} = environment;

export const urls = {
  auth: `${baseURL}/auth`,
  users: `${baseURL}/users`,
  cars: `${baseURL}/cars`,
}
