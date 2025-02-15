import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import SigninForm from "../components/SigninForm";
import { routes } from "../libs/config/constructors";
import useAuth from "../libs/hooks/useAuth";

interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = async () => {
  const { token } = await useAuth();

  if (token) {
    return redirect(routes.root.path);
  }

  return <SigninForm />;
};

export default Signin;
