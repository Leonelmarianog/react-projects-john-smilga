import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const Underline = styled.div`
  margin-top: 0.5em;
  width: 5em;
  height: 0.25em;
  background-color: var(--clr-red-1);
`;

const Header = ({ title }) => (
  <Container>
    <h1>{title}</h1>
    <Underline />
  </Container>
);

export default Header;
