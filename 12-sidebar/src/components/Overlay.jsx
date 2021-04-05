import React from 'react';
import styled from 'styled-components';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isSidebarOpen ? '#00000025' : '#00000000')};
  transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Overlay = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return <Container isSidebarOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />;
};

export default Overlay;
