interface PostRepository {
  getAll(): Promise<IPostData[]>;
  getById(id: number): Promise<IPostData>;
}

export default PostRepository;
