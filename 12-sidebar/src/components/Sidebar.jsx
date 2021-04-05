import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { links, social } from '../data/data';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.nav`
  background: var(--clr-white-1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: var(--font-size-sidebar);
  display: flex;
  flex-direction: column;
  ${(props) => (props.isSidebarOpen ? 'transform: translateX(0)' : 'transform: translateX(-100%)')};
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 10;
  pointer-events: auto;

  @media screen and (min-width: 350px) {
    width: 320px;
  }
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

const Brand = styled.img`
  height: auto;
  width: 9em;
  display: block;
`;

const CloseSidebarButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--clr-blue-3);
  font-size: calc(var(--font-size-sidebar) * 1.5);
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: var(--clr-blue-4);
  }

  & > * {
    display: block;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: var(--clr-blue-5);
  display: block;
  transition: background-color 0.3s linear, padding-left 0.3s linear;
  padding: 0.75em;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--clr-blue-2);
    padding-left: 2em;
  }

  &:active {
    background-color: var(--clr-blue-3);
  }

  & > *:first-child {
    margin-right: 0.5em;
  }
`;

const SidebarFooter = styled.footer`
  margin-top: auto;
`;

const SidebarIcons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
`;

const Icon = styled.a`
  text-decoration: none;
  color: var(--clr-blue-3);
  transition: color 0.3s linear;

  &:hover {
    color: var(--clr-blue-4);
  }
`;

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <SidebarHeader>
        <Brand src={logo} alt='coding addict' />
        <CloseSidebarButton onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </CloseSidebarButton>
      </SidebarHeader>

      <SidebarMenu>
        {links.map((link) => {
          const { id, url, name, icon } = link;
          return (
            <li key={id}>
              <MenuItem href={url}>
                {icon}
                {name}
              </MenuItem>
            </li>
          );
        })}
      </SidebarMenu>

      <SidebarFooter>
        <SidebarIcons>
          {social.map((socialIcon) => {
            const { id, url, name, icon } = socialIcon;
            return (
              <li key={id}>
                <Icon href={url} aria-label={name}>
                  {icon}
                </Icon>
              </li>
            );
          })}
        </SidebarIcons>
      </SidebarFooter>
    </Container>
  );
};

export default Sidebar;
