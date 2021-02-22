import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { sidebarData } from '../../data/data';

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 80px;

  @media screen and (min-width: 992px) {
    height: 64px;
  }
`;

const Header = () => (
  <Container>
    <Navbar />
    <Sidebar data={sidebarData} />
    <Submenu />
  </Container>
);

export default Header;
