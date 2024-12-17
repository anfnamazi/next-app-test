"use client";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import { UserRoleEnum } from "../@types/enum";
import { Breadcrumbs } from "../components/BreadCrumbs";
import useAuth from "../hooks/useAuth";
import { routes } from "../libs/constructors";

interface SettingLayoutProps {
  readonly children: React.ReactNode;
}

const SettingLayout: FunctionComponent<SettingLayoutProps> = ({ children }) => {
  const { token } = useAuth();

  const decodedToken: IUserData = jwtDecode(token || "");

  if (decodedToken.role !== UserRoleEnum.ADMIN) {
    return redirect(routes.root);
  }

  return (
    <main>
      <Breadcrumbs />
      <br />
      {children}
    </main>
  );
};

export default SettingLayout;
