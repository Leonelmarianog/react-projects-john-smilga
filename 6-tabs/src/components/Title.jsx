import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Underline = styled.div`
  background-color: var(--clr-light-blue-2);
  width: 5em;
  height: 0.25em;
  margin-top: 0.5em;
`;

const Title = ({ children }) => (
  <Header>
    <h1>{children}</h1>
    <Underline />
  </Header>
);

export default Title;
