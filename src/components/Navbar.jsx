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

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10% 0 10%;
  }
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
    padding: 0;
  }
`;

const HamburguerBtn = styled.button`
  background-color: #ffffff25;
  border: none;
  font-size: var(--font-size-navbar);
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

const NavbarMenu = styled.ul`
  list-style: none;
  display: none;

  & > li {
    margin-right: 3em;
  }

  & > li:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
  }
`;

const NavbarEnd = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

const LoginBtn = styled.a`
  text-decoration: none;
  background-color: #ffffff25;
  color: var(--clr-white-1);
  font-weight: bold;
  padding: 0.4em 1em 0.5em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
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

      <NavbarMenu>
        <li>
          <MenuItem href='/'>Productos</MenuItem>
        </li>
        <li>
          <MenuItem href='/'>Desarrolladores</MenuItem>
        </li>
        <li>
          <MenuItem href='/'>Empresa</MenuItem>
        </li>
        <li>
          <MenuItem href='/'>Tarifas</MenuItem>
        </li>
      </NavbarMenu>

      <NavbarEnd>
        <LoginBtn>Iniciar sesión</LoginBtn>
      </NavbarEnd>
    </Container>
  );
};

export default Navbar;
