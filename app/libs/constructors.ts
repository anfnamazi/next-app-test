import { LocalStorageEnum } from "../@types/enum";

export const baseUrl = "https://jsonplaceholder.typicode.com";
export const localUrl = "http://localhost:4000";

export const postUrl = `${baseUrl}/posts`;
export const userUrl = `${localUrl}/users`;
export const registerUrl = `${localUrl}/register`;
export const signinUrl = `${localUrl}/signin`;

export const routes = {
  root: "./",
  register: "./register",
  setting: "./setting",
  list: "./list",
  signin: "./signin",
  signout: "./signout",
};
