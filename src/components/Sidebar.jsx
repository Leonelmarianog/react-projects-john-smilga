import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.nav`
  background-color: var(--clr-white-1);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;
  padding: 2.5em 0 0 0;
  border-radius: 10px;
  opacity: ${(props) => (props.isSidebarOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isSidebarOpen ? 'auto' : 'none')};
  transform: ${(props) =>
    props.isSidebarOpen ? 'scale(1) translate(-50%, -50%)' : 'scale(0.9) translate(-50%, -50%)'};
  transition: transform 0.2s linear, opacity 0.2s linear;
  transform-origin: 50% -50%;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  padding: 0 2em;
`;

const Title = styled.h1`
  color: var(--clr-blue-4);
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-base) * 2);
`;

const TwoColumnList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2em;
  column-gap: 1em;
  padding: 0 2em;
  margin-bottom: 2em;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--clr-blue-1);
  font-weight: bold;
  font-size: calc(var(--font-size-base) * 1.2);
`;

const HR = styled.hr`
  margin-bottom: 2em;
  border-top: 1px dashed var(--clr-blue-4);
  opacity: 0.25;
`;

const SidebarFooter = styled.footer`
  background-color: var(--clr-blue-5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  flex: 1 1 auto;
  max-height: 15%;
  padding: 2em 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const LoginBtn = styled.a`
  text-decoration: none;
  background-color: var(--clr-purple-1);
  color: var(--clr-white-1);
  font-size: calc(var(--font-size-base) * 1.5);
  font-weight: bold;
  padding: 0.4em 1em 0.5em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-purple-2);
  }
`;

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <SidebarHeader>
        <Title>Productos</Title>
        <CloseBtn onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </CloseBtn>
      </SidebarHeader>
      <TwoColumnList>
        <li>
          <Link href='/'>Payments</Link>
        </li>
        <li>
          <Link href='/'>Billing</Link>
        </li>
        <li>
          <Link href='/'>Payouts</Link>
        </li>
        <li>
          <Link href='/'>Corporate Card</Link>
        </li>
        <li>
          <Link href='/'>Treasury</Link>
        </li>
        <li>
          <Link href='/'>Sigma</Link>
        </li>
        <li>
          <Link href='/'>Climate</Link>
        </li>
        <li>
          <Link href='/'>Terminal</Link>
        </li>
        <li>
          <Link href='/'>Connect</Link>
        </li>
        <li>
          <Link href='/'>Issuing</Link>
        </li>
        <li>
          <Link href='/'>Capital</Link>
        </li>
        <li>
          <Link href='/'>Radar</Link>
        </li>
        <li>
          <Link href='/'>Atlas</Link>
        </li>
      </TwoColumnList>
      <HR />
      <TwoColumnList>
        <li>
          <Link href='/'>Tarifas</Link>
        </li>
        <li>
          <Link href='/'>Acerca de Stripe</Link>
        </li>
        <li>
          <Link href='/'>Empresa</Link>
        </li>
        <li>
          <Link href='/'>Empleos</Link>
        </li>
        <li>
          <Link href='/'>Socios</Link>
        </li>
        <li>
          <Link href='/'>Sala de prensa</Link>
        </li>
        <li>
          <Link href='/'>Documentacion</Link>
        </li>
        <li>
          <Link href='/'>Soporte</Link>
        </li>
        <li>
          <Link href='/'>Blog</Link>
        </li>
      </TwoColumnList>
      <SidebarFooter>
        <LoginBtn href='/'>Iniciar sesion</LoginBtn>
      </SidebarFooter>
    </Container>
  );
};

export default Sidebar;
