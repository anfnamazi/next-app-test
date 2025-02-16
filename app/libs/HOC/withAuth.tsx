import { redirect } from "next/navigation";
import { FC } from "react";
import { routes } from "../config/constructors";
import useAuth from "../hooks/useAuth";

export function withAuth<TProps extends {}>(Component: FC<TProps>) {
  return async (props: TProps) => {
    const { token } = await useAuth();

    if (!token) {
      return redirect(routes.signin.path);
    }

    return <Component {...props} />;
  };
}
