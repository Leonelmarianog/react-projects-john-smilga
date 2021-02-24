import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

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

const ChangeQuantityButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: calc(var(--font-size-base) * 2);
  color: var(--clr-white-1);
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-orange-1);
  }
`;

const ItemCounter = () => (
  <Container>
    <ChangeQuantityButton>
      <FaPlus />
    </ChangeQuantityButton>
    <Quantity>1</Quantity>
    <ChangeQuantityButton>
      <FaMinus />
    </ChangeQuantityButton>
  </Container>
);

export default ItemCounter;
