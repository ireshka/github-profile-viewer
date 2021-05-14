export interface IUser {
  name: string;
  avatarUrl: string;
  company: string | null;
  login: string;
  profileLink: string;
}

export interface IGithubLogin {
  login: string;
}

export const initialData: IGithubLogin[] = [
  {
    login: 'gaearon',
  },
  {
    login: 'leaverou',
  },
  {
    login: 'iamshaunjp',
  },
];
