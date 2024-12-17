"use client";

import { redirect } from "next/navigation";
import { Menu } from "./components/Menu";
import useAuth from "./hooks/useAuth";
import { routes } from "./libs/constructors";

export default function Home() {
  const { token } = useAuth();
  if (!token) {
    return redirect(routes.signin);
  }
  return <Menu />;
}
