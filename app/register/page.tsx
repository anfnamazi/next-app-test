"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, FunctionComponent } from "react";
import { LocalStorageEnum, QueryKeyEnum, UserRoleEnum } from "../@types/enum";
import useAuth from "../hooks/useAuth";
import { registerUrl } from "../libs/constructors";
const sign = require("jwt-encode");

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const queryClient = useQueryClient();
  const { setToken } = useAuth();

  const mutation = useMutation<IUserResponse, unknown, Omit<IUserData, "id">>({
    mutationFn: (req) =>
      fetch(registerUrl, {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.USERS] });
      if (!data?.user) return alert("check inputs!");
      // FIXME: json-server-auth not supported custom property in jwt
      const token = sign(data.user, "psp");
      localStorage.setItem(LocalStorageEnum.TOKEN, token);
      setToken(token);
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      role: e.currentTarget.userRole.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" style={{ color: "black" }} />
      <br />
      <input type="password" name="password" style={{ color: "black" }} />
      <br />
      <input
        type="radio"
        id="userRole1"
        name="userRole"
        value={UserRoleEnum.USER}
      />
      <label htmlFor="userRole1">User</label>
      <br />
      <input
        type="radio"
        id="userRole2"
        name="userRole"
        value={UserRoleEnum.ADMIN}
      />
      <label htmlFor="userRole2">Admin</label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
