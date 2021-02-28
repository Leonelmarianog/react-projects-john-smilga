import React from 'react';
import styled from 'styled-components';
import { Navbar, Dropdown } from './navigation';

const Container = styled.header`
  height: 64px;
  background-color: var(--clr-white-1);
  box-shadow: 0 0 0.25em 0.25em var(--clr-transparent-1);
  position: relative;
`;

const Header = () => (
  <Container>
    <Navbar />
    {/* <Dropdown /> */}
  </Container>
);

export default Header;
