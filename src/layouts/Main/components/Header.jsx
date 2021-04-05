import React, { useContext } from 'react';
import styled from 'styled-components';
import { Navbar, Dropdown, Overlay } from '../../../components/navigation';
import { AppContext } from '../../../contexts/GlobalContext';

const Container = styled.header`
  height: 64px;
  background-color: var(--clr-white-1);
  box-shadow: 0 0 0.25em 0.25em var(--clr-transparent-1);
  position: relative;
`;

const Header = () => {
  const { isDropdownOpen } = useContext(AppContext);

  return (
    <Container>
      <Overlay />
      <Navbar />
      {isDropdownOpen && <Dropdown />}
    </Container>
  );
};

export default Header;
