import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Button, List, BaseLink } from '../common';

const Container = styled.nav`
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Brand = styled(BaseLink)`
  color: var(--clr-black-1);
  font-weight: bolder;
  font-size: calc(var(--font-size-base) * 1.25);
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-yellow-4);
  }
`;

const HamburguerButton = styled(Button)`
  font-size: calc(var(--font-size-base) * 1.25);
  display: flex;
  align-items: center;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px var(--clr-transparent-1);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled(List)`
  display: none;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Link = styled(BaseLink)`
  color: var(--clr-black-1);
  padding: 0.5em 0.75em;
  font-weight: bolder;
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-yellow-4);
  }
`;

const Navbar = () => (
  <Container>
    <Header>
      <Brand to='/'>Cocktails</Brand>
      <HamburguerButton>
        <FaBars />
      </HamburguerButton>
    </Header>

    <Menu>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Menu>
  </Container>
);

export default Navbar;
