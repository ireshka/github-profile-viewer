import { ErrorMessages } from './constants/errorMessages';
import { initialData, IUser } from './data/initialData';
import { api } from './services/api/github';
import { GetUserResponse, IFullUser } from './services/api/github.types';

export const checkUser = (users: IUser[], username: string): boolean => {
  const foundUser = users.find((user) => user.login.toLowerCase() === username.toLowerCase());
  if (foundUser) {
    return true;
  }
  return false;
};

export const getUserData = (fullUserData: IFullUser): IUser => {
  const { name, login, avatar_url: avatarUrl, company, html_url: profileLink } = fullUserData;
  const selectedUserData = {
    name,
    login,
    avatarUrl,
    company,
    profileLink,
  };
  return selectedUserData;
};

export const isUser = (data: GetUserResponse): data is IFullUser => {
  if ('login' in data) {
    return true;
  }
  return false;
};

export const getInitialUserData = async (): Promise<IUser[]> => {
  const initialGithubLogins = initialData;
  const data = await Promise.all(initialGithubLogins.map(({ login }) => api.getUser(login)));
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const fullUserData = data.filter(isUser);
  const initialUserData = fullUserData.map((user) => getUserData(user));
  return initialUserData;
};

export const getRequestError = (data: GetUserResponse): ErrorMessages | null => {
  let errorMessage;
  if ('status' in data) {
    const { status } = data;

    if (status) {
      switch (status) {
        case 403:
          errorMessage = ErrorMessages.tooManyRequest;
          break;
        case 404:
          errorMessage = ErrorMessages.userNotFound;
          break;
        default:
          errorMessage = ErrorMessages.unknownError;
      }
    } else {
      const { message } = data;
      errorMessage = message || ErrorMessages.unknownError;
    }
  } else {
    errorMessage = null;
  }
  return errorMessage;
};
