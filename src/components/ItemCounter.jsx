import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Button } from './common';
import { useGlobalContext } from '../hooks';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2/-1;
  grid-row: 1/2;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

const Quantity = styled.span`
  font-size: calc(var(--font-size-base) * 1.5);
  margin: 0.25em;
`;

const ChangeQuantityButton = styled(Button)`
  font-size: calc(var(--font-size-base) * 2);
  color: var(--clr-white-1);
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-orange-1);
  }
`;

const ItemCounter = ({ id, amount }) => {
  const { dispatch } = useGlobalContext();

  return (
    <Container>
      <ChangeQuantityButton
        aria-label='increase item amount'
        onClick={() => dispatch({ type: 'TOGGLE_QUANTITY', payload: { id, action: 'INCREASE' } })}
      >
        <FaPlus />
      </ChangeQuantityButton>
      <Quantity>{amount}</Quantity>
      <ChangeQuantityButton
        aria-label='decrease item amount'
        onClick={() => dispatch({ type: 'TOGGLE_QUANTITY', payload: { id, action: 'DECREASE' } })}
      >
        <FaMinus />
      </ChangeQuantityButton>
    </Container>
  );
};

export default ItemCounter;
