"use client";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { QueryKeyEnum } from "../@types/enum";
import { postUrl } from "../libs/constructors";

interface ListProps {}

const List: FunctionComponent<ListProps> = () => {
  const { isPending, error, data } = useQuery<IPostData[]>({
    queryKey: [QueryKeyEnum.POSTS],
    queryFn: () => fetch(postUrl).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return data.map((i) => <div key={i.id}>{i.title}</div>);
};

export default List;
