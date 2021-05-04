import styled from 'styled-components';

export const StyledList = styled('ul')`
  align-items: stretch;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  padding: 0;
`;

export const StyledListElement = styled('li')`
  display: flex;
`;
