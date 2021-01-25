import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  background-color: var(--clr-white-2);
  border: 1px solid var(--clr-red);
  border-radius: 5px;
  padding: 0.5em 1.5em;
  color: var(--clr-red);
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--clr-red);
    color: var(--clr-white-2);
  }
`;

const Button = ({ children, callback }) => (
  <StyledButton onClick={callback}>{children}</StyledButton>
);

export default Button;
