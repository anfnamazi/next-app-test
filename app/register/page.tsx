import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import RegisterForm from "../components/RegisterForm";
import { routes } from "../libs/config/constructors";
import useAuth from "../libs/hooks/useAuth";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = async () => {
  const { token } = await useAuth();

  if (token) {
    return redirect(routes.root.path);
  }

  return <RegisterForm />;
};

export default Register;
