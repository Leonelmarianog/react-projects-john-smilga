import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useGlobalContext from '../../hooks/useGlobalContext';
import { Card } from '../common';
import Products from './tabs/Products';
import Developers from './tabs/Developers';
import Company from './tabs/Company';
import { productsTab, developersTab, companyTab } from '../../data/data';

const transition = {
  css: '0.2s',
  value: 200,
};

const PerspectiveWrapper = styled.div`
  position: absolute;
  top: calc(100% - (25% / 2));
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100vh;
  perspective: 250px;
  pointer-events: none;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform-origin: top;

  &.submenu--enter {
    opacity: 0;
    transform: rotateX(-3deg);
  }

  &.submenu--enter-active {
    opacity: 1;
    transform: rotateX(0deg);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.submenu--enter-done {
    opacity: 1;
    transform: rotateX(0deg);
  }

  &.submenu--exit {
    opacity: 1;
    transform: rotateX(0deg);
  }

  &.submenu--exit-active {
    opacity: 0;
    transform: rotateX(-3deg);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.submenu--exit-done {
    opacity: 0;
    transform: rotateX(-3deg);
  }
`;

const PaddingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  padding-top: calc((var(--width-submenu-arrow) / 2) + 1px);
  transform-origin: 0 0;
  transform: translate(-50%, 0);
  transition: width 0.2s linear;
  pointer-events: auto;
`;

const SubmenuArrow = styled.div`
  background-color: var(--clr-white-1);
  width: var(--width-submenu-arrow);
  height: var(--height-submenu-arrow);
  position: absolute;
  top: 1px;
  left: ${({ targetCenterCoord }) => (targetCenterCoord ? `${targetCenterCoord}px` : '50%')};
  transition: left ${transition.css} cubic-bezier(0.16, 1, 0.3, 1);
  transform: rotateZ(45deg);
  pointer-events: auto;
`;

const Tabs = styled(Card)`
  overflow: hidden;
  transition: width 0.2s linear, height 0.2s linear;
  position: relative;

  ${({ currentTab }) =>
    currentTab === 'Productos' &&
    css`
      width: 946px;
      height: 378px;
    `}

  ${({ currentTab }) =>
    currentTab === 'Desarrolladores' &&
    css`
      width: 604px;
      height: 391px;
    `}

  ${({ currentTab }) =>
    currentTab === 'Empresa' &&
    css`
      width: 604px;
      height: 332px;
    `}
`;

const Submenu = () => {
  const { isSubmenuMounted, submenuTargetCenterCoord, currentTab } = useGlobalContext();
  const submenuRef = useRef(null);

  return (
    <PerspectiveWrapper>
      <CSSTransition
        in={isSubmenuMounted}
        timeout={transition.value}
        classNames={'submenu-'}
        mountOnEnter={true}
        unmountOnExit={true}
        nodeRef={submenuRef}
      >
        <Container ref={submenuRef}>
          <SubmenuArrow targetCenterCoord={submenuTargetCenterCoord} />
          <PaddingWrapper>
            <Tabs currentTab={currentTab}>
              <TransitionGroup component={null}>
                {currentTab === 'Productos' && (
                  <CSSTransition key={'products'} timeout={200} classNames={'tab-'}>
                    <Products products={productsTab} />
                  </CSSTransition>
                )}
                {currentTab === 'Desarrolladores' && (
                  <CSSTransition key={'developers'} timeout={200} classNames={'tab-'}>
                    <Developers information={developersTab} />
                  </CSSTransition>
                )}
                {currentTab === 'Empresa' && (
                  <CSSTransition key={'company'} timeout={200} classNames={'tab-'}>
                    <Company information={companyTab} />
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Tabs>
          </PaddingWrapper>
        </Container>
      </CSSTransition>
    </PerspectiveWrapper>
  );
};

export default Submenu;
