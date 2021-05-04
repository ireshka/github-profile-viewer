import styled from 'styled-components';

export const StyledHeading = styled('h1')`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.border.small};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  text-align: center;
`;
