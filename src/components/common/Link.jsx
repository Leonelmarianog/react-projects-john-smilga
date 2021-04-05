import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: var(--clr-blue-2);
  transition: color 0.2s linear;
  white-space: nowrap;

  &:hover {
    color: var(--clr-blue-1);
  }
`;

export default Link;
