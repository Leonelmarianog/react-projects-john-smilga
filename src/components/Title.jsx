import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Underline = styled.div`
  width: 5em;
  height: 0.25em;
  background-color: var(--clr-yellow-2);
  margin-top: 0.25em;
`;

const Title = ({ children }) => (
  <Header>
    <h1>{children}</h1>
    <Underline />
  </Header>
);

export default Title;
