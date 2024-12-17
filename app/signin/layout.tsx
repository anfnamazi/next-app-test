"use client";
import { FunctionComponent } from "react";
import { redirect } from "next/navigation";
import { routes } from "../libs/constructors";
import useAuth from "../hooks/useAuth";

interface SigninLayoutProps {
  readonly children: React.ReactNode;
}

const SigninLayout: FunctionComponent<SigninLayoutProps> = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    redirect(routes.root);
  }
  return <main>{children}</main>;
};

export default SigninLayout;
