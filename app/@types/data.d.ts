interface IPostData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface IUserData {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: ICompany;
  address: Record<string, any>;
}

interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
