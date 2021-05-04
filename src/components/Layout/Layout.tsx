import { ReactElement, ReactNode } from 'react';

import * as S from './Layout.styles';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps): ReactElement | null => (
  <S.StyledLayout>{children}</S.StyledLayout>
);
