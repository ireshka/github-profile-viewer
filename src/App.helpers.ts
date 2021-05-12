import { initialData, IUser, UserType } from './data/initialData';
import { api } from './services/api/github';
import { IFullUser } from './services/api/github.types';

export const checkUser = (users: IUser[], username: string): boolean => {
  const foundUser = users.find((user) => user.login.toLowerCase() === username.toLowerCase());
  if (foundUser) {
    return true;
  }
  return false;
};

export const getUserData = (fullUserData: IFullUser | null): UserType => {
  let selectedUserData;
  if (fullUserData !== null) {
    const { name, login, avatar_url: avatarUrl, company, html_url: profileLink } = fullUserData;
    selectedUserData = {
      name,
      login,
      avatarUrl,
      company,
      profileLink,
    };
  } else {
    selectedUserData = null;
  }
  return selectedUserData;
};

function isNotNull<T>(argument: T | null): argument is T {
  return argument !== null;
}

export const getInitialUserData = async (): Promise<IUser[]> => {
  const initialGithubLogins = initialData;
  const initialFullUserData = await Promise.all(
    initialGithubLogins.map(({ login }) => api.getUser(login)),
  );
  const initialUserData = initialFullUserData.map((fullUser) => getUserData(fullUser));
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const existedInitialUserData = initialUserData.filter(isNotNull);
  return existedInitialUserData;
};
