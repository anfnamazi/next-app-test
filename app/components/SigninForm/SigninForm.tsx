"use client";
import AuthApiAdapter from "@/app/adapters/auth";
import { routes } from "@/app/libs/config/constructors";
import useAuthClient from "@/app/libs/hooks/useAuthClient";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface SigninFormProps {}

const SigninForm: FunctionComponent<SigninFormProps> = () => {
  const { setToken } = useAuthClient();
  const { push } = useRouter();

  const handleAction = async (formData: FormData) => {
    try {
      const authApi = new AuthApiAdapter();
      const userReq: IUserRequest = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      const response = await authApi.signin(userReq);
      setToken(response.accessToken);
      push(routes.root);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form action={handleAction}>
      <input type="text" name="email" style={{ color: "black" }} />
      <br />
      <input type="password" name="password" style={{ color: "black" }} />
      <br />
      <button type="submit">Signin</button>
      <br />
      <Link href={routes.register} prefetch={false}>
        Register
      </Link>
    </form>
  );
};

export default SigninForm;
