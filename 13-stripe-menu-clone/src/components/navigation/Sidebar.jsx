import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import useGlobalContext from '../../hooks/useGlobalContext';
import { LinkButton, List, LinkIcon, Card } from '../common';

const transition = {
  css: '0.2s',
  value: 200,
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 1em;
  font-size: calc(var(--font-size-base) * 0.75);
  transform-origin: top right;

  @media screen and (min-width: 992px) {
    display: none;
  }

  &.sidebar--enter {
    transform: scale(0.9);
    opacity: 0;
  }

  &.sidebar--enter-active {
    transform: scale(1);
    opacity: 1;
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.sidebar--enter-done {
    transform: scale(1);
    opacity: 1;
  }

  &.sidebar--exit {
    transform: scale(1);
    opacity: 1;
  }

  &.sidebar--exit-active {
    transform: scale(0.9);
    opacity: 0;
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.sidebar--exit-done {
    transform: scale(0.9);
    opacity: 0;
  }
`;

const Container = styled(Card)`
  font-size: calc(var(--font-size-base) * 0.75);

  @media screen and (min-width: 420px) {
    font-size: var(--font-size-base);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1.5em 0 1.5em;
`;

const Title = styled.h1`
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-base) * 0.75);

  @media screen and (min-width: 420px) {
    font-size: var(--font-size-base);
  }
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--font-size-base) * 0.85);

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 1.25);
  }

  & > svg {
    display: block;
  }
`;

const Main = styled.main`
  padding: 1em 0 2em 0;
`;

const Section = styled.section`
  padding: 0 1.5em;
`;

const HR = styled.hr`
  border-top: 1px dashed var(--clr-blue-4);
  opacity: 0.25;
  margin: 1.5em 0;
`;

const Footer = styled.footer`
  background-color: var(--clr-blue-5);
  text-align: center;
  border-radius: 0 0px 10px 10px;
  padding: 2em;
`;

const LoginButton = styled(LinkButton)`
  background-color: var(--clr-purple-1);

  &:hover {
    background-color: var(--clr-purple-2);
  }
`;

const Sidebar = ({ data }) => {
  const { setIsSidebarMounted, isSidebarMounted } = useGlobalContext();
  const sidebarRef = useRef(null);

  return (
    <CSSTransition
      in={isSidebarMounted}
      timeout={transition.value}
      classNames={'sidebar-'}
      mountOnEnter={true}
      unmountOnExit={true}
      nodeRef={sidebarRef}
    >
      <Wrapper ref={sidebarRef}>
        <Container>
          <Header>
            <Title>Productos</Title>
            <CloseBtn onClick={() => setIsSidebarMounted(false)}>
              <FaTimes />
            </CloseBtn>
          </Header>

          <Main>
            <Section>
              <List
                columns='2'
                columnGap='1em'
                rowGap='1em'
                breakpoints={[
                  { breakpoint: '576px', columns: 3 },
                  { breakpoint: '768px', columns: 4 },
                ]}
              >
                {data.main.links.map((link, index) => (
                  <li key={index + 1}>
                    <LinkIcon {...link} />
                  </li>
                ))}
              </List>
            </Section>

            <HR />

            <Section>
              <List
                columns='2'
                columnGap='1em'
                rowGap='1em'
                breakpoints={[
                  { breakpoint: '576px', columns: 3 },
                  { breakpoint: '768px', columns: 4 },
                ]}
              >
                {data.footer.links.map((link, index) => (
                  <li key={index + 1}>
                    <LinkIcon {...link} />
                  </li>
                ))}
              </List>
            </Section>
          </Main>

          <Footer>
            <LoginButton href='/'>Iniciar sesion</LoginButton>
          </Footer>
        </Container>
      </Wrapper>
    </CSSTransition>
  );
};

export default Sidebar;
