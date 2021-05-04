import styled from 'styled-components';

export const StyledWrapper = styled('div')`
  background-image: ${({ theme }) => theme.colors.lightGradient};
  border-left: 5px solid ${({ theme }) => theme.colors.secondary};
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr 3fr;
  padding: ${({ theme }) => theme.spacing.medium};
  width: 100%;
`;

export const StyledImage = styled('img')`
  border-radius: 50%;
  max-width: 75px;
`;

export const StyledInfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled('h3')`
  color: ${({ theme }) => theme.colors.main};
  margin: 0 0 ${({ theme }) => theme.spacing.small};
`;

export const StyledProfileLinkWrapper = styled('div')``;

export const StyledCompany = styled('p')`
  &::before {
    content: '🏢';
    padding-right: ${({ theme }) => theme.spacing.small};
  }
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

export const StyledProfileLink = styled('a')`
  color: ${({ theme }) => theme.colors.main};
  position: relative;
  text-decoration: none;
  &::before {
    background-color: ${({ theme }) => theme.colors.secondary};
    bottom: -2px;
    content: '';
    height: 1px;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
    width: 100%;
  }
  &:hover {
    &::before {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
