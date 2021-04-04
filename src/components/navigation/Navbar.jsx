import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { BaseLink } from '../common';
import { Button, List } from '../../styles';
import { useGlobalContext } from '../../hooks';

const Container = styled.nav`
  position: absolute;
  background-color: var(--clr-white-1);
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
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

const HamburgerButton = styled.button`
  ${Button}

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

const NavMenu = styled.ul`
  ${List}

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

const Navbar = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useGlobalContext();

  return (
    <Container aria-label="navigation">
      <Header>
        <Brand to="/">Cocktails</Brand>
        <HamburgerButton
          aria-label="hamburger button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FaBars />
        </HamburgerButton>
      </Header>

      <NavMenu aria-label="navigation menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </NavMenu>
    </Container>
  );
};

export default Navbar;
