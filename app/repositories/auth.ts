interface AuthRepository {
  signin(user: IUserRequest): Promise<IAuthResponse>;
  register(user: IUserRequest): Promise<IAuthResponse>;
}

export default AuthRepository;
