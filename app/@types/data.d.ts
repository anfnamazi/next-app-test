interface IPostData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface IUserData {
  email: string;
  id: number;
  password: string;
  role: string;
}

interface IUserResponse {
  accessToken: string;
  user: IUserData;
}
