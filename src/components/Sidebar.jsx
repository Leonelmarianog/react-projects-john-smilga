import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';
import LinkButton from './common/LinkButton';
import List from './common/List';
import LinkIcon from './common/LinkIcon';
import Card from './common/Card';

const transition = {
  css: '0.2s',
  value: 200,
};

const Container = styled(Card)`
  position: absolute;
  top: 2.5%;
  left: 50%;
  z-index: 3;
  width: 95%;
  transform-origin: 50% -2.5%;

  @media screen and (min-width: 992px) {
    display: none;
  }

  &.sidebar--enter {
    transform: scale(0.9) translate(-50%, 0);
    opacity: 0;
  }

  &.sidebar--enter-active {
    transform: scale(1) translate(-50%, 0);
    opacity: 1;
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
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
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
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
  font-size: var(--font-size-base);
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-base) * 1.25);
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    display: block;
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

const LoginButton = styled(LinkButton)`
  background-color: var(--clr-purple-1);

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
      timeout={{ enter: transition.value, exit: transition.value }}
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

        <List
          columns='2'
          breakpoints={[
            { breakpoint: '576px', columns: 3 },
            { breakpoint: '768px', columns: 4 },
          ]}
        >
          {sidebarLinks.products.map((link, index) => (
            <li key={index + 1}>
              <LinkIcon {...link} />
            </li>
          ))}
        </List>

        <HR />

        <List
          columns='2'
          breakpoints={[
            { breakpoint: '576px', columns: 3 },
            { breakpoint: '768px', columns: 4 },
          ]}
        >
          {sidebarLinks.other.map((link, index) => (
            <li key={index + 1}>
              <LinkIcon {...link} />
            </li>
          ))}
        </List>

        <SidebarFooter>
          <LoginButton href='/'>Iniciar sesion</LoginButton>
        </SidebarFooter>
      </Container>
    </CSSTransition>
  );
};

export default Sidebar;
