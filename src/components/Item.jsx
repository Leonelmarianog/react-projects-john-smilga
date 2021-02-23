import React from 'react';
import styled from 'styled-components';
import ItemCounter from './ItemCounter';

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: repeat(2, auto);
  font-size: calc(var(--font-size-base) * 0.75);
  white-space: nowrap;
`;

const Image = styled.img`
  height: auto;
  width: 150px;
  grid-column: 1/2;
  grid-row: 1/2;

  @media screen and (min-width: 400px) {
    width: 300px;
  }
`;

const ItemInfo = styled.section`
  text-align: center;
  grid-column: 1/-1;
  grid-row: 2/-1;
`;

const Name = styled.h1`
  margin: 0.5em 0;
  text-transform: capitalize;
`;

const Price = styled.h2`
  margin-bottom: 0.75em;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: var(--clr-white-1);
  border: 1px solid var(--clr-red-1);
  border-radius: 5px;
  padding: 0.5em 1.5em;
  transition: color 0.2s linear, background-color 0.2s linear;
  font-size: var(--font-size-base);
  font-weight: bold;

  &:hover {
    color: var(--clr-black-1);
    background-color: var(--clr-red-1);
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
