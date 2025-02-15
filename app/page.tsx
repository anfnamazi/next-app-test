import Link from "next/link";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import PostApiAdapter from "./adapters/post";
import Posts from "./components/Posts";
import { routes } from "./libs/config/constructors";
import useAuth from "./libs/hooks/useAuth";

interface HomeProps {}

export const revalidate = 60;

const Home: FunctionComponent<HomeProps> = async () => {
  const { token } = await useAuth();
  if (!token) {
    return redirect(routes.signin.path);
  }

  const postApi = new PostApiAdapter();
  const posts = await postApi.getAll();

  return (
    <main>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <Posts posts={posts} />
      </section>
      <br />
      <Link
        href={routes.signout.path}
        prefetch={false}
        style={{ color: "red" }}
      >
        SignOut
      </Link>
    </main>
  );
};

export default Home;
