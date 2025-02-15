import PostApiAdapter from "@/app/adapters/post";
import { routes } from "@/app/libs/config/constructors";
import useAuth from "@/app/libs/hooks/useAuth";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";

interface DetailsProps {
  params: Promise<{ id: number }>;
}

export const revalidate = 60;

const Details: FunctionComponent<DetailsProps> = async ({ params }) => {
  const { token } = await useAuth();

  if (!token) {
    return redirect(routes.signin.path);
  }

  const id = (await params).id;

  const postApi = new PostApiAdapter();
  const post = await postApi.getById(id);

  return (
    <>
      <div className="grid grid-flow-col gap-4">
        <h5 className="h-5 col-span-1">Title:</h5>
        <p className="font-bold col-span-3">{post.title}</p>
      </div>
      <div className="grid grid-flow-col gap-4">
        <h5 className="h-5 col-span-1">Body:</h5>
        <p className="font-bold col-span-3">{post.body}</p>
      </div>
    </>
  );
};

export default Details;
