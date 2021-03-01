import React from 'react';
import styled from 'styled-components';
import { BaseLink } from '../../../components/common';
import { Card } from '../../../styles';

const Container = styled(BaseLink)`
  ${Card}

  width: 200px;
  color: var(--clr-black-1);
  transition: transform 0.2s cubic-bezier(0, 0.55, 0.45, 1),
    box-shadow 0.2s cubic-bezier(0, 0.55, 0.45, 1);

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 1em 0.25em #00000050;
  }

  @media screen and (min-width: 420px) {
    width: 300px;
  }

  @media screen and (min-width: 576px) {
    width: 200px;
  }

  @media screen and (min-width: 992px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const Name = styled.p`
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: calc(var(--font-size-base) * 0.85);
  margin: 1em 0 0 0;
  text-transform: uppercase;
  text-align: center;
`;

const Cocktail = () => (
  <Container to='/cocktail/1'>
    <Image
      src='https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'
      alt='mojito'
    />
    <Name>Mojito</Name>
  </Container>
);

export default Cocktail;
