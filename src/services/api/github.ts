import axios from 'axios';

import { ErrorMessages } from '../../constants/errorMessages';
import { instance } from './github.instance';
import { GetUserResponse, IFullUser, IGithubRequestError } from './github.types';

const createErrorObject = (
  errorMessage: ErrorMessages | string,
  status: null | number = null,
): IGithubRequestError => {
  if (status) {
    return {
      status,
      githubMessage: errorMessage as string,
      message: null,
    };
  }
  return {
    status,
    githubMessage: null,
    message: errorMessage as ErrorMessages,
  };
};

export const api = {
  async getUser(username: string): Promise<GetUserResponse> {
    try {
      if (!username) {
        return createErrorObject(ErrorMessages.noUsername);
      }
      const response = await instance.get<IFullUser>(username);
      const { data } = response;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status }: { status: number } = error.response;
          // eslint-disable-next-line unicorn/consistent-destructuring
          const { message }: { message: string } = error.response.data;
          return createErrorObject(message, status);
        }
        return createErrorObject(ErrorMessages.unknownError);
      }
      return createErrorObject(ErrorMessages.unknownError);
    }
  },
};
