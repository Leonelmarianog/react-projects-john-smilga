import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-blue-3);
  font-size: calc(var(--font-size-sidebar) * 1.5);
  position: fixed;
  top: 0.75em;
  left: 0.75em;
  transition: color 0.3s linear;

  &:hover {
    color: var(--clr-blue-4);
  }
`;

const HamburguerButton = () => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <Button onClick={() => setIsSidebarOpen(true)}>
      <FaBars />
    </Button>
  );
};

export default HamburguerButton;
