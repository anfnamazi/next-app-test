"use client";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { CookieEnum } from "../config/enum";

const useAuthClient = () => {
  const token = getCookie(CookieEnum.TOKEN);

  const setToken = (token: string) => {
    setCookie(CookieEnum.TOKEN, token);
  };

  const removeToken = async () => {
    deleteCookie(CookieEnum.TOKEN);
  };
  return { token, setToken, removeToken };
};
export default useAuthClient;
