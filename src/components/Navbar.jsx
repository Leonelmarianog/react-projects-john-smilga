import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import brand from '../assets/logo.svg';
import { links, social } from '../data/data';

const Nav = styled.nav`
  background-color: var(--clr-white-1);

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
  }
`;

const NavbarBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media screen and (min-width: 768px) {
    padding: 1em 0;
  }
`;

const Brand = styled.img`
  display: block;
  height: auto;
  width: 12em;
`;

const NavbarBurguer = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: calc(var(--font-size-base) * 1.5);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavbarCollapse = styled.div`
  ${(props) => console.log(props.height)};
  height: ${(props) => props.height};
  transition: height 0.3s linear;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

const NavbarMenu = styled.ul`
  list-style: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: var(--clr-black-1);
  display: block;
  transition: background-color 0.3s;
  padding: 1em;
  text-transform: capitalize;

  &:hover {
    background-color: var(--clr-blue-2);
  }

  &:active {
    background-color: var(--clr-blue-3);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const NavbarEnd = styled.ul`
  display: none;
  @media screen and (min-width: 992px) {
    list-style: none;
    display: flex;

    & > li {
      margin-right: 1.5em;
    }

    & > li:last-child {
      margin-right: 0;
    }
  }
`;

const Icon = styled.a`
  font-size: calc(var(--font-size-base) * 1.5);
  color: var(--clr-blue-2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: color 0.3s;

  & > *:hover {
    color: var(--clr-blue-3);
  }

  & > *:active {
    color: var(--clr-blue-4);
  }
`;

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [height, setHeight] = useState(0);
  const navbarMenuRef = useRef(null);

  useEffect(() => {
    if (isCollapsed) {
      const navbarMenuHeight = navbarMenuRef.current.getBoundingClientRect().height;
      setHeight(navbarMenuHeight);
    } else {
      setHeight(0);
    }
  }, [isCollapsed]);

  return (
    <Nav>
      <NavbarBrand>
        <a href='/'>
          <Brand src={brand} alt='coding addict' />
        </a>
        <NavbarBurguer onClick={() => setIsCollapsed(!isCollapsed)} aria-label='menu toggle'>
          <FaBars />
        </NavbarBurguer>
      </NavbarBrand>

      <NavbarCollapse height={`${height}px`} isCollapsed={isCollapsed}>
        <NavbarMenu ref={navbarMenuRef}>
          {links.map((link) => {
            const { id, url, name } = link;
            return (
              <li key={id}>
                <MenuItem href={url}>{name}</MenuItem>
              </li>
            );
          })}
        </NavbarMenu>
      </NavbarCollapse>

      <NavbarEnd>
        {social.map((item) => {
          const { id, url, icon, name } = item;
          return (
            <li key={id}>
              <Icon href={url} aria-label={name}>
                {icon}
              </Icon>
            </li>
          );
        })}
      </NavbarEnd>
    </Nav>
  );
};

export default Navbar;
