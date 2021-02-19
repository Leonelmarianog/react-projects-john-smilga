import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useGlobalContext from '../hooks/useGlobalContext';
import ProductsCategories from './ProductsCategories';
import ProductsCategory from './ProductsCategory';
import { Card } from './common';
import { getLeftCoord } from '../utils/utils';

const transition = {
  css: '0.2s',
  value: 200,
};

const PerspectiveProvider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  perspective: 250px;
  pointer-events: none;
`;

const Container = styled.div`
  position: absolute;
  top: 3.5em;
  left: 50%;
  padding-top: 0.75em;
  transform-origin: 0 0;
  transform: translate(-50%, 0);
  pointer-events: auto;

  &:after {
    content: '';
    background-color: var(--clr-white-1);
    width: 12px;
    height: 12px;
    position: absolute;
    top: 6px;
    left: ${({ submenuTargetCenterCoord, submenuLeftCoord }) =>
      `${submenuTargetCenterCoord - submenuLeftCoord}px`};
    transition: left ${transition.css} cubic-bezier(0.16, 1, 0.3, 1);
    transform: rotateZ(45deg);
  }

  &.submenu--enter {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
  }

  &.submenu--enter-active {
    opacity: 1;
    transform: translate(-50%, 0) rotateX(0deg);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.submenu--enter-done {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &.submenu--exit {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &.submenu--exit-active {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.submenu--exit-done {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
  }
`;

const Content = styled(Card)`
  padding: 2em 2.5em;
`;

const Submenu = ({ productsCategories }) => {
  const { isSubmenuMounted, submenuTargetCenterCoord, windowWidth } = useGlobalContext();
  const [submenuLeftCoord, setSubmenuLeftCoord] = useState(0);
  const submenuRef = useRef(null);

  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuLeftCoord(getLeftCoord(submenuRef.current));
    }
  }, [windowWidth]);

  return (
    <PerspectiveProvider>
      <CSSTransition
        in={isSubmenuMounted}
        timeout={{ enter: transition.value, exit: transition.value }}
        classNames={'submenu-'}
        mountOnEnter={true}
        unmountOnExit={true}
        nodeRef={submenuRef}
        onEnter={() => setSubmenuLeftCoord(getLeftCoord(submenuRef.current))}
      >
        <Container
          ref={submenuRef}
          submenuTargetCenterCoord={submenuTargetCenterCoord}
          submenuLeftCoord={submenuLeftCoord}
        >
          <Content>
            <ProductsCategories>
              {productsCategories.map((productsCategory, index) => (
                <ProductsCategory key={index + 1} {...productsCategory} />
              ))}
            </ProductsCategories>
          </Content>
        </Container>
      </CSSTransition>
    </PerspectiveProvider>
  );
};

export default Submenu;
