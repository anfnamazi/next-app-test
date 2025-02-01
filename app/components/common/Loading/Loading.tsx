"use client";
import { FunctionComponent } from "react";

interface LoadingProps {
  readonly children: React.ReactNode;
  show?: boolean;
}

const Loading: FunctionComponent<LoadingProps> = ({
  children,
  show = true,
}) => {
  return <main>{show ? "Loading..." : children}</main>;
};

export default Loading;
