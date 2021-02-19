import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useGlobalContext from '../hooks/useGlobalContext';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: #000000;

  &.overlay--enter {
    opacity: 0;
  }

  &.overlay--enter-active {
    opacity: 0.25;
    transition: opacity 0.2s linear;
  }

  &.overlay--enter-done {
    opacity: 0.25;
  }

  &.overlay--exit {
    opacity: 0.25;
  }

  &.overlay--exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  &.overlay--exit-done {
    opacity: 0;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Overlay = () => {
  const { isSidebarMounted, setIsSidebarMounted } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isSidebarMounted}
      timeout={{ enter: 200 }}
      classNames={'overlay-'}
      mountOnEnter={true}
      unmountOnExit={true}
      nodeRef={nodeRef}
    >
      <Background ref={nodeRef} onClick={() => setIsSidebarMounted(false)} />
    </CSSTransition>
  );
};

export default Overlay;
