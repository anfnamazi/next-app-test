"use client";

import { redirect } from "next/navigation";
import { Menu } from "./components/Menu";
import { routes } from "./libs/constructors";
import useAuth from "./hooks/useAuth";

export default function Home() {
  const { token } = useAuth();
  if (!token) {
    redirect(routes.signin);
  }
  return <Menu />;
}
