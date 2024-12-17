"use client";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { userUrl } from "../libs/constructors";
import { QueryKeyEnum } from "../@types/enum";

interface SettingProps {}

const Setting: FunctionComponent<SettingProps> = () => {
  const { isPending, error, data } = useQuery<IUserData[]>({
    queryKey: [QueryKeyEnum.USERS],
    queryFn: () => fetch(userUrl).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((i) => (
        <div key={i.id}>{i.email}</div>
      ))}
    </div>
  );
};

export default Setting;
