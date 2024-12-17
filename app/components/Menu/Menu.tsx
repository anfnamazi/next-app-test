import { routes } from "@/app/libs/constructors";
import Link from "next/link";
import { FunctionComponent } from "react";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="flex flex-col">
      <Link href={routes.list}>List</Link>
      <Link href={routes.setting}>Setting</Link>
      <br />
      <br />
      <br />
      <Link href={routes.signout} style={{ color: "red" }}>
        SignOut
      </Link>
    </div>
  );
};

export default Menu;
