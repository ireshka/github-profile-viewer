import { VFC } from 'react';

import { IUser } from '../../data/initialData';
import { GithubCard } from '../GithubCard/GithubCard';
import * as S from './CardList.styles';

interface IUsers {
  users: IUser[];
}

export const CardList: VFC<IUsers> = ({ users }) => (
  <S.StyledList>
    {users.map((user) => (
      <S.StyledListElement key={user.login}>
        <GithubCard user={user} />
      </S.StyledListElement>
    ))}
  </S.StyledList>
);
