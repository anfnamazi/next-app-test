import { postUrl } from "../libs/config/constructors";
import PostRepository from "../repositories/post";

class PostApiAdapter implements PostRepository {
  async getAll(): Promise<IPostData[]> {
    const response = await fetch(postUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  }
}

export default PostApiAdapter;
