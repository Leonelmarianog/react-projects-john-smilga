import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 3em 0 3em;

  @media screen and (min-width: 576px) {
    padding: 2em 3em 0 3em;
  }

  @media screen and (min-width: 992px) {
    padding: 1em 3em 0 3em;
  }
`;

const HamburguerBtn = styled.button`
  background-color: #ffffff25;
  border: none;
  font-size: calc(var(--font-size-navbar) * 1);
  padding: 0.5em 1em;
  border-radius: 10px;
  color: var(--clr-white-1);
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Brand = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  font-size: calc(var(--font-size-navbar) * 1.75);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
  }
`;

const Navbar = () => {
  const { setIsSidebarMounted } = useGlobalContext();

  return (
    <Container>
      <NavbarHeader>
        <Brand href='/'>stripe</Brand>
        <HamburguerBtn aria-label='hamburguer button' onClick={() => setIsSidebarMounted(true)}>
          <FaBars />
        </HamburguerBtn>
      </NavbarHeader>
    </Container>
  );
};

export default Navbar;
