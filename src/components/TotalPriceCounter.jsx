import React from 'react';
import styled from 'styled-components';
import { ColourButton } from './common';

const Container = styled.article`
  width: 80%;
  max-width: 1250px;
  margin: 2em auto 0 auto;
  font-size: var(--font-size-base);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: inherit;
  }
`;

const Overline = styled.div`
  background-color: var(--clr-orange-1);
  height: 5px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.p`
  font-weight: bold;
  letter-spacing: 1px;
`;

const ClearCartButton = styled(ColourButton)`
  border-color: var(--clr-red-1);

  &:hover {
    background-color: var(--clr-red-1);
  }

  @media screen and (min-width: 420px) {
    font-size: var(--font-size-base);
  }
`;

const TotalPriceCounter = () => (
  <Container>
    <Overline />
    <Counter>
      <p>Total</p>
      <Total>$459.99</Total>
    </Counter>
    <ClearCartButton>Clear Cart</ClearCartButton>
  </Container>
);

export default TotalPriceCounter;
