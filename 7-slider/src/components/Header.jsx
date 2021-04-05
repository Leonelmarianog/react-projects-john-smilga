import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--clr-blue-3);
`;

const Underline = styled.div`
  width: 5em;
  height: 0.25em;
  background-color: var(--clr-orange-1);
  margin-top: 0.5em;
`;

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Underline />
  </Container>
);

export default Header;
