import React from 'react';
import styled from 'styled-components';
import { FaShoppingBag } from 'react-icons/fa';

const Container = styled.a`
  position: relative;
  text-decoration: none;
  color: var(--clr-white-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemQuantity = styled.div`
  background-color: var(--clr-red-1);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-base);
  position: absolute;
  top: -30%;
  left: 50%;
`;

const BagIcon = styled(FaShoppingBag)`
  font-size: calc(var(--font-size-base) * 2);
`;

const BagCounter = () => (
  <Container href='/'>
    <ItemQuantity>1</ItemQuantity>
    <BagIcon />
  </Container>
);

export default BagCounter;
