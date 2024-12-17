"use client";
import { FunctionComponent } from "react";
import { Breadcrumbs } from "../components/BreadCrumbs";

interface ListLayoutProps {
  readonly children: React.ReactNode;
}

const ListLayout: FunctionComponent<ListLayoutProps> = ({ children }) => {
  return (
    <main>
      <Breadcrumbs />
      <br />
      {children}
    </main>
  );
};

export default ListLayout;
