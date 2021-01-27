import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: var(--clr-blue-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    height: 0.15em;
    width: 5em;
    background-color: var(--clr-blue-3);
    margin: 0.5em 0;
  }
`;

const Title = ({ children }) => (
  <Heading>
    {children}
    <div></div>
  </Heading>
);

export default Title;
