export const baseUrl = "https://jsonplaceholder.typicode.com";
export const localUrl = "http://localhost:4000";

export const postUrl = `${baseUrl}/posts`;
export const userUrl = `${localUrl}/users`;
export const registerUrl = `${localUrl}/register`;
export const signinUrl = `${localUrl}/signin`;

interface IRoutes {
  root: IRoute;
  details: Required<IRoute>;
  register: IRoute;
  signin: IRoute;
  signout: IRoute;
}

export const routes: IRoutes = {
  root: { path: "/" },
  register: { path: "/register" },
  signin: { path: "/signin" },
  signout: { path: "/signout" },
  details: {
    path: "/details",
    url(id) {
      return `${this.path}/${id}`;
    },
  },
};
