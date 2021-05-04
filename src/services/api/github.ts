import { axios } from './github.instance';
import { IFullUser } from './github.types';

export const api = {
  async getUser(username: string): Promise<IFullUser | null> {
    try {
      if (!username) {
        return null;
      }
      const response = await axios.get<IFullUser>(username);
      const { data } = response;
      return data;
    } catch {
      return null;
    }
  },
};
