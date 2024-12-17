"use client";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import useAuth from "../hooks/useAuth";
import { routes } from "../libs/constructors";

interface SigninLayoutProps {
  readonly children: React.ReactNode;
}

const SigninLayout: FunctionComponent<SigninLayoutProps> = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    return redirect(routes.root);
  }
  return <main>{children}</main>;
};

export default SigninLayout;
