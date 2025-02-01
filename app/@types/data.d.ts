interface IPostData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface IUserRequest {
  email: string;
  password: string;
}

interface IUserData extends IUserRequest {
  id: number;
}

interface IUserResponse {
  accessToken: string;
  user: IUserData;
}

interface IAuthResponse {
  accessToken: string;
}
