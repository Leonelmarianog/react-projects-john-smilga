import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../hooks';

const Container = styled.article`
  width: 80%;
  max-width: 1250px;
  margin: 2em auto 0 auto;
  font-size: var(--font-size-base);

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

const TotalPriceCounter = () => {
  const {
    state: { total },
  } = useGlobalContext();

  return (
    <Container>
      <Overline />
      <Counter>
        <p>Total</p>
        <Total>${total}</Total>
      </Counter>
    </Container>
  );
};

export default TotalPriceCounter;
