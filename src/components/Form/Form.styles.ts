import styled from 'styled-components';

export const StyledForm = styled('form')`
  padding: 10px;
`;

export const StyledInputWrapper = styled('div')`
  align-items: stretch;
  display: flex;
  height: 3rem;
  justify-content: center;
`;

export const StyledInput = styled('input')`
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-bottom-left-radius: ${({ theme }) => theme.border.small};
  border-right: none;
  border-top-left-radius: ${({ theme }) => theme.border.small};
  color: ${({ theme }) => theme.colors.main};
  font-size: 1rem;
  font-style: normal;
  padding: ${({ theme }) => theme.spacing.medium};
  transition: 0.3s ease-out all;
  &::placeholder {
    color: ${({ theme }) => theme.colors.main};
    font-style: italic;
  }
  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.main};
    outline: none;
  }
`;

export const StyledButton = styled('button')`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-bottom-right-radius: ${({ theme }) => theme.border.small};
  border-top-right-radius: ${({ theme }) => theme.border.small};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  transition: 0.3s ease-out all;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
    outline: none;
  }
`;
