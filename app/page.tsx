import Link from "next/link";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import PostApiAdapter from "./adapters/post";
import { routes } from "./libs/config/constructors";
import useAuth from "./libs/hooks/useAuth";

interface HomeProps {}

export const revalidate = 60;

const Home: FunctionComponent<HomeProps> = async () => {
  const { token } = await useAuth();
  if (!token) {
    return redirect(routes.signin);
  }

  const postApi = new PostApiAdapter();
  const posts = await postApi.getAll();

  return (
    <main>
      <ul>
        {posts.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
      <br />
      <Link href={routes.signout} prefetch={false} style={{ color: "red" }}>
        SignOut
      </Link>
    </main>
  );
};

export default Home;
