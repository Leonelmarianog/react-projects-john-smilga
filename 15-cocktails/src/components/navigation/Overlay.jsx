import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../hooks';

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: ${({ isDropdownOpen }) =>
    isDropdownOpen ? '#00000025' : '#00000000'};
  transition: background-color 0.2s;
  pointer-events: ${({ isDropdownOpen }) => (isDropdownOpen ? 'auto' : 'none')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Overlay = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useGlobalContext();

  return (
    <Container
      isDropdownOpen={isDropdownOpen}
      onClick={() => setIsDropdownOpen(false)}
    />
  );
};

export default Overlay;
