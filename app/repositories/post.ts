interface PostRepository {
  getAll(): Promise<IPostData[]>;
}

export default PostRepository;
