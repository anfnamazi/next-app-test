"use client";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";

interface ListProps {}

const List: FunctionComponent<ListProps> = () => {
  const { isPending, error, data } = useQuery<IPostData[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return data.map((i) => <div key={i.id}>{i.title}</div>);
};

export default List;
