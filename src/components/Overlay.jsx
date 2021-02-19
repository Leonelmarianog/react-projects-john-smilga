import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useGlobalContext from '../hooks/useGlobalContext';

const transition = {
  css: '0.2s',
  value: 200,
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--clr-black-1);

  @media screen and (min-width: 992px) {
    display: none;
  }

  &.overlay--enter {
    opacity: 0;
  }

  &.overlay--enter-active {
    opacity: 0.25;
    transition: opacity ${transition.css} linear;
  }

  &.overlay--enter-done {
    opacity: 0.25;
  }

  &.overlay--exit {
    opacity: 0.25;
  }

  &.overlay--exit-active {
    opacity: 0;
    transition: opacity ${transition.css} linear;
  }

  &.overlay--exit-done {
    opacity: 0;
  }
`;

const Overlay = () => {
  const { isSidebarMounted, setIsSidebarMounted } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isSidebarMounted}
      timeout={{ enter: transition.value, exit: transition.value }}
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
