"use client";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";

interface SettingProps {}

const Setting: FunctionComponent<SettingProps> = () => {
  const { isPending, error, data } = useQuery<IUserData[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((i) => (
        <div key={i.id}>{i.username}</div>
      ))}
    </div>
  );
};

export default Setting;
