import PostApiAdapter from "@/app/adapters/post";
import { withAuth } from "@/app/libs/HOC/withAuth";
import { FunctionComponent } from "react";

interface DetailsProps {
  params: Promise<{ id: number }>;
}

const Details: FunctionComponent<DetailsProps> = async ({ params }) => {
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
        <p className="col-span-3 content-normal">{post.body}</p>
      </div>
    </>
  );
};

export default withAuth(Details);
