import styled from 'styled-components';

const LinkButton = styled.a`
  text-decoration: none;
  background-color: var(--clr-transparent-1);
  color: var(--clr-white-1);
  padding: 0.3em 1em 0.5em 1em;
  border-radius: 20px;
  font-size: var(--font-size-base);
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-color 0.2s linear;
  white-space: nowrap;
  width: min-content;

  &:hover {
    background-color: var(--clr-transparent-2);
  }
`;

export default LinkButton;
