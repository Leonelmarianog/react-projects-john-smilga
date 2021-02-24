import React from 'react';
import styled from 'styled-components';
import ItemCounter from './ItemCounter';
import { ColourButton } from './common';

const Container = styled.article`
  background-color: var(--clr-transparent-1);
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 0 0.5em 0.5em var(--clr-transparent-2);
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: repeat(2, auto);
  font-size: calc(var(--font-size-base) * 0.5);
  white-space: nowrap;

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 0.75);
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Image = styled.img`
  height: auto;
  width: 150px;
  grid-column: 1/2;
  grid-row: 1/2;

  @media screen and (min-width: 420px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    margin-right: 2em;
  }
`;

const ItemInfo = styled.section`
  text-align: center;
  grid-column: 1/-1;
  grid-row: 2/-1;

  @media screen and (min-width: 768px) {
    text-align: unset;
  }
`;

const Name = styled.h1`
  margin: 0.5em 0;
  text-transform: capitalize;
`;

const Price = styled.h2`
  margin-bottom: 0.75em;
  letter-spacing: 1px;
`;

const RemoveButton = styled(ColourButton)`
  font-size: calc(var(--font-size-base) * 0.85);

  @media screen and (min-width: 420px) {
    font-size: var(--font-size-base);
  }
`;

const Item = ({ id, title, price, img, amount }) => (
  <Container>
    <Image src={img} />
    <ItemInfo>
      <Name>{title}</Name>
      <Price>${price}</Price>
      <RemoveButton>Remove</RemoveButton>
    </ItemInfo>
    <ItemCounter />
  </Container>
);

export default Item;
