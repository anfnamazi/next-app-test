import { cookies } from "next/headers";
import { CookieEnum } from "../config/enum";

const useAuth = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(CookieEnum.TOKEN);

  const setToken = async (token: string) => {
    "use server";
    cookieStore.set(CookieEnum.TOKEN, token);
  };

  const removeToken = async () => {
    "use server";
    cookieStore.delete(CookieEnum.TOKEN);
  };
  return { token, setToken, removeToken };
};
export default useAuth;
