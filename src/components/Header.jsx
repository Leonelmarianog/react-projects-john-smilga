import React from 'react';
import styled from 'styled-components';
import Bag from './Bag';

const Container = styled.header`
  background-color: var(--clr-red-1);
  height: var(--height-header);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;

const Brand = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 576px) {
    font-size: calc(var(--font-size-base) * 1.5);
  }
`;

const Header = () => (
  <Container>
    <Brand href='/'>YourBag.com</Brand>
    <Bag />
  </Container>
);

export default Header;
