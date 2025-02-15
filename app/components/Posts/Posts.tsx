"use client";
import { routes } from "@/app/libs/config/constructors";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Card from "../common/Card";

interface PostsProps {
  posts: IPostData[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const { push } = useRouter();

  const handleClick = (id: number) => {
    return () => {
      push(routes.details.url(id));
    };
  };

  return posts.map((i) => (
    <Card
      title={i.title}
      description={i.body}
      key={i.id}
      onClick={handleClick(i.id)}
    />
  ));
};

export default Posts;
