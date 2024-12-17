"use client";
import { FunctionComponent } from "react";
import { routes } from "../libs/constructors";
import { LocalStorageEnum } from "../@types/enum";
import { redirect } from "next/navigation";
import useAuth from "../hooks/useAuth";

interface SignoutProps {}

const Signout: FunctionComponent<SignoutProps> = () => {
  const { setToken } = useAuth();
  localStorage.removeItem(LocalStorageEnum.TOKEN);
  setToken(null);

  return redirect(routes.signin);
};

export default Signout;
