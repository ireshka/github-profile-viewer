import xCircleBold from '@iconify-icons/ph/x-circle-bold';
import { VFC } from 'react';

import { ErrorMessages } from '../../constants/errorMessages';
import * as S from './ErrorBox.styles';

interface IErrorBox {
  text: ErrorMessages;
}

export const ErrorBox: VFC<IErrorBox> = ({ text }) => (
  <S.StyledErrorBox>
    <S.StyledIconWrapper>
      <S.StyledIcon icon={xCircleBold} height="1.5rem" width="1.5rem" />
    </S.StyledIconWrapper>
    <S.StyledTextWrapper>{text}</S.StyledTextWrapper>
  </S.StyledErrorBox>
);
