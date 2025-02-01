import { registerUrl, signinUrl } from "../libs/config/constructors";
import AuthRepository from "../repositories/auth";

class AuthApiAdapter implements AuthRepository {
  async signin(user: IUserRequest): Promise<IAuthResponse> {
    const response = await fetch(signinUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  }

  async register(user: IUserRequest): Promise<IAuthResponse> {
    const response = await fetch(registerUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  }
}

export default AuthApiAdapter;
