import Link from "next/link";
import { FunctionComponent } from "react";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="flex flex-col">
      <Link href="/list">List</Link>
      <Link href="/setting">Setting</Link>
    </div>
  );
};

export default Menu;
