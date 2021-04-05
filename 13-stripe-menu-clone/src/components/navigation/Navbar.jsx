import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import useGlobalContext from '../../hooks/useGlobalContext';
import { LinkButton } from '../common';
import { getCenterCoord } from '../../utils/utils';

const Container = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5%;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: auto 0 1em 0;

  @media screen and (min-width: 992px) {
    display: block;
    margin: 0;
  }
`;

const HamburguerButton = styled.button`
  background-color: var(--clr-transparent-1);
  border: none;
  color: var(--clr-white-1);
  font-size: var(--font-size-base);
  padding: 0.5em 1em;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: var(--clr-transparent-2);
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Brand = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  font-size: calc(var(--font-size-base) * 1.75);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
  }
`;

const Menu = styled.ul`
  display: none;
  height: 75%;

  @media screen and (min-width: 992px) {
    display: flex;
    list-style: none;

    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

const MenuButton = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: var(--clr-white-1);
  font-size: var(--font-size-base);
  font-weight: bold;
  padding: 0.75em 2em;
  transition: opacity 0.2s linear;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.5;
  }
`;

const Footer = styled.footer`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

const LoginButton = styled(LinkButton)`
  background-color: var(--clr-transparent-1);

  &:hover {
    background-color: var(--clr-transparent-2);
  }
`;

const Navbar = () => {
  const {
    setIsSidebarMounted,
    setIsSubmenuMounted,
    setSubmenuTargetCenterCoord,
    windowWidth,
    setCurrentTab,
  } = useGlobalContext();
  const [currentMenuItem, setCurrentMenuItem] = useState(null);

  const openSubmenu = (event) => {
    if (event.target.id === 'menu-button') {
      setSubmenuTargetCenterCoord(getCenterCoord(event.target, -6));
      setIsSubmenuMounted(true);
      setCurrentMenuItem(event.target);
      setCurrentTab(event.target.textContent);
    }
  };

  const closeSubmenu = (event) => {
    if (event.target.id !== 'menu-button') {
      setIsSubmenuMounted(false);
    }
  };

  useEffect(() => {
    if (currentMenuItem) {
      setSubmenuTargetCenterCoord(getCenterCoord(currentMenuItem, -6));
    }
  }, [currentMenuItem, setSubmenuTargetCenterCoord, windowWidth]);

  return (
    <Container onMouseOver={closeSubmenu}>
      <Header>
        <Brand href='/'>stripe</Brand>
        <HamburguerButton aria-label='hamburguer button' onClick={() => setIsSidebarMounted(true)}>
          <FaBars />
        </HamburguerButton>
      </Header>

      <Menu>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Productos
          </MenuButton>
        </li>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Desarrolladores
          </MenuButton>
        </li>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Empresa
          </MenuButton>
        </li>
        <li>
          <MenuButton as='a' href='/'>
            Tarifas
          </MenuButton>
        </li>
      </Menu>

      <Footer>
        <LoginButton href='/'>Iniciar sesión</LoginButton>
      </Footer>
    </Container>
  );
};

export default Navbar;
