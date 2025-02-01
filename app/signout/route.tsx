import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { routes } from "../libs/config/constructors";
import useAuth from "../libs/hooks/useAuth";

const GET = async (request: NextRequest) => {
  const { removeToken } = await useAuth();
  removeToken();

  return redirect(routes.signin);
};

export function handler() {}

export default GET;
