"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, FunctionComponent } from "react";
import { signinUrl, routes } from "../libs/constructors";
import { LocalStorageEnum, QueryKeyEnum } from "../@types/enum";
import { redirect } from "next/navigation";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
const sign = require("jwt-encode");

interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const queryClient = useQueryClient();
  const { setToken } = useAuth();

  const mutation = useMutation<
    IUserResponse,
    unknown,
    Omit<IUserData, "id" | "role">
  >({
    mutationFn: (req) =>
      fetch(signinUrl, {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.USERS] });
      // FIXME: json-server-auth not supported custom property in jwt
      if (data?.user) {
        const token = sign(data.user, "psp");
        localStorage.setItem(LocalStorageEnum.TOKEN, token);
        setToken(token);
      }
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" style={{ color: "black" }} />
      <br />
      <input type="password" name="password" style={{ color: "black" }} />
      <br />
      <button type="submit">Signin</button>
      <br />
      <Link href={routes.register}>Register</Link>
    </form>
  );
};

export default Signin;
