"use client";
import AuthApiAdapter from "@/app/adapters/auth";
import useAuthClient from "@/app/libs/hooks/useAuthClient";
import { FunctionComponent } from "react";

interface RegisterFormProps {}

const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
  const { setToken } = useAuthClient();

  const handleAction = async (formData: FormData) => {
    try {
      const authApi = new AuthApiAdapter();
      const userReq: IUserRequest = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      const response = await authApi.register(userReq);
      setToken(response.accessToken);
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
