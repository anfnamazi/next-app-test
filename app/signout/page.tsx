"use client";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import { routes } from "../libs/config/constructors";
import useAuthClient from "../libs/hooks/useAuthClient";

interface SignoutProps {}

const Signout: FunctionComponent<SignoutProps> = () => {
  const { removeToken } = useAuthClient();
  removeToken();

  return redirect(routes.signin);
};

export default Signout;
