import React, { VFC } from 'react';

import { IUser } from '../../data/initialData';
import * as S from './GithubCard.styles';

interface IGithubCard {
  user: IUser;
}

export const GithubCard: VFC<IGithubCard> = ({ user }) => {
  const { avatarUrl, company, login, name, profileLink } = user;

  return (
    <S.StyledWrapper>
      <S.StyledImage src={avatarUrl} alt={`${name} avatar`} />
      <S.StyledInfoWrapper>
        <S.StyledName>{name}</S.StyledName>
        <S.StyledProfileLinkWrapper>
          <S.StyledProfileLink href={profileLink}>@{login}</S.StyledProfileLink>
        </S.StyledProfileLinkWrapper>
        {company && <S.StyledCompany>{company}</S.StyledCompany>}
      </S.StyledInfoWrapper>
    </S.StyledWrapper>
  );
};
