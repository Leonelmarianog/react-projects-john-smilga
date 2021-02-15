import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';

const SidebarAnimTime = {
  css: '0.2s',
  milliseconds: 200,
};

const Container = styled.nav`
  background-color: var(--clr-white-1);
  position: absolute;
  top: 2.5%;
  left: 50%;
  z-index: 3;
  width: 95%;
  padding: 1.5em 0 0 0;
  border-radius: 10px;
  transform-origin: 50% -2.5%;
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-sidebar);

  // React Transition Group Styles

  &.sidebar--enter {
    transform: scale(0.9) translate(-50%, 0);
    opacity: 0;
  }

  &.sidebar--enter-active {
    transform: scale(1) translate(-50%, 0);
    opacity: 1;
    transition: transform ${SidebarAnimTime.css} linear, opacity ${SidebarAnimTime.css};
  }

  &.sidebar--enter-done {
    transform: scale(1) translate(-50%, 0);
    opacity: 1;
  }

  &.sidebar--exit {
    transform: scale(1) translate(-50%, 0);
    opacity: 1;
  }

  &.sidebar--exit-active {
    transform: scale(0.9) translate(-50%, 0);
    opacity: 0;
    transition: transform ${SidebarAnimTime.css} linear, opacity ${SidebarAnimTime.css};
  }

  &.sidebar--exit-done {
    transform: scale(0.9) translate(-50%, 0);
    opacity: 0;
  }
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
  padding: 0 1.5em;
`;

const Title = styled.h1`
  color: var(--clr-blue-4);
  font-size: var(--font-size-sidebar);
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-sidebar) * 1.25);
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    display: block;
  }
`;

const TwoColumnList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1em;
  column-gap: 1em;
  padding: 0 1.5em;
  margin-bottom: 1.5em;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--clr-blue-1);
  font-weight: bold;
  font-size: calc(var(--font-size-sidebar) * 0.85);
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5em;
  }
`;

const HR = styled.hr`
  margin-bottom: 1.5em;
  border-top: 1px dashed var(--clr-blue-4);
  opacity: 0.25;
`;

const SidebarFooter = styled.footer`
  background-color: var(--clr-blue-5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 1.5em 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const LoginBtn = styled.a`
  text-decoration: none;
  background-color: var(--clr-purple-1);
  color: var(--clr-white-1);
  font-size: var(--font-size-sidebar);
  font-weight: bold;
  padding: 0.4em 1em 0.5em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--clr-purple-2);
  }
`;

const Sidebar = ({ sidebarLinks }) => {
  const { setIsSidebarMounted, isSidebarMounted } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isSidebarMounted}
      timeout={{ enter: SidebarAnimTime.milliseconds, exit: SidebarAnimTime.milliseconds }}
      classNames={'sidebar-'}
      mountOnEnter={true}
      unmountOnExit={true}
      nodeRef={nodeRef}
    >
      <Container ref={nodeRef}>
        <SidebarHeader>
          <Title>Productos</Title>
          <CloseBtn onClick={() => setIsSidebarMounted(false)}>
            <FaTimes />
          </CloseBtn>
        </SidebarHeader>

        <TwoColumnList>
          {sidebarLinks.products.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <li key={index + 1}>
                <Link href={url}>
                  {icon} {label}
                </Link>
              </li>
            );
          })}
        </TwoColumnList>

        <HR />

        <TwoColumnList>
          {sidebarLinks.other.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <li key={index + 1}>
                <Link href={url}>
                  {icon} {label}
                </Link>
              </li>
            );
          })}
        </TwoColumnList>

        <SidebarFooter>
          <LoginBtn href='/'>Iniciar sesion</LoginBtn>
        </SidebarFooter>
      </Container>
    </CSSTransition>
  );
};

export default Sidebar;
