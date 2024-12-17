"use client";
import { FunctionComponent } from "react";
import { UserRoleEnum } from "../@types/enum";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { routes } from "../libs/constructors";
import useAuth from "../hooks/useAuth";

interface SettingLayoutProps {
  readonly children: React.ReactNode;
}

const SettingLayout: FunctionComponent<SettingLayoutProps> = ({ children }) => {
  const { token } = useAuth();

  const decodedToken: IUserData = jwtDecode(token || "");

  if (decodedToken.role !== UserRoleEnum.ADMIN) {
    return redirect(routes.root);
  }

  return <main>{children}</main>;
};

export default SettingLayout;
