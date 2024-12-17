"use client";
import { FunctionComponent } from "react";
import { redirect } from "next/navigation";
import { routes } from "../libs/constructors";
import useAuth from "../hooks/useAuth";

interface RegisterLayoutProps {
  readonly children: React.ReactNode;
}

const RegisterLayout: FunctionComponent<RegisterLayoutProps> = ({
  children,
}) => {
  const { token } = useAuth();

  if (token) {
    return redirect(routes.root);
  }
  return <main>{children}</main>;
};

export default RegisterLayout;
