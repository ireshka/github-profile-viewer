import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const StyledErrorBox = styled('div')`
  border-radius: ${({ theme }) => theme.border.small};
  display: flex;
`;

export const StyledIconWrapper = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.error.dark};
  border-bottom-left-radius: ${({ theme }) => theme.border.small};
  border-top-left-radius: ${({ theme }) => theme.border.small};
  display: flex;
  justify-content: center;
  min-height: 3rem;
  min-width: 3rem;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledTextWrapper = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.error.light};
  border-bottom-right-radius: ${({ theme }) => theme.border.small};
  border-top-right-radius: ${({ theme }) => theme.border.small};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.small};
  justify-content: flex-start;
  padding: 0.875rem;
`;
