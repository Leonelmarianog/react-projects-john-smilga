import React from 'react';
import styled, { css } from 'styled-components';
import { BiDrink } from 'react-icons/bi';
import { GiDrinkMe } from 'react-icons/gi';
import { BsPencilSquare } from 'react-icons/bs';

const Container = styled.main`
  border: 1px solid red;
  padding: 4em 0em;
  display: flex;
  flex-direction: column;
  font-size: calc(var(--font-size-base) * 0.5);

  & > section {
    margin-bottom: 4em;
  }

  & > section:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1);
  }
`;

const Heading = styled.h1`
  font-size: calc(var(--font-size-base) * 0.85);
  text-transform: capitalize;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 0.5em;
  }

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 1.25);
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1.5);
    margin: 0 2.5em 0 0;
  }
`;

const Image = styled.img`
  height: auto;
  min-width: 250px;
  max-width: 500px;
  width: 70%;
  border-radius: 10px;
  margin: 0 auto 4em auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Text = styled.p`
  font-size: calc(var(--font-size-base) * 0.65);
  margin: 0;

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 0.85);
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1);
  }
`;

const Label = styled.span`
  font-weight: bolder;
`;

const List = styled.ul`
  ${({ bullets }) =>
    !bullets &&
    css`
      list-style: none;
      padding: 0;
    `};

  margin: 0;

  & > li {
    margin-bottom: 1em;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const Cocktail = () => (
  <Container aria-label='cocktail info page'>
    <Image
      src='https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'
      alt='mojito'
    />
    <Section>
      <Heading>
        General Info <BiDrink />
      </Heading>
      <List bullets={false}>
        <Text as='li'>
          <Label>Name: </Label>Mojito
        </Text>
        <Text as='li'>
          <Label>Type: </Label>Cocktail
        </Text>
        <Text as='li'>
          <Label>Alcoholic?: </Label>Yes
        </Text>
        <Text as='li'>
          <Label>Glass: </Label>Highball Glass
        </Text>
      </List>
    </Section>

    <Section>
      <Heading>
        Ingredients <BsPencilSquare />
      </Heading>
      <List bullets={true}>
        <Text as='li'>Light Rum</Text>
        <Text as='li'>Lime</Text>
        <Text as='li'>Sugar</Text>
        <Text as='li'>Mint</Text>
        <Text as='li'>Soda Water</Text>
      </List>
    </Section>

    <Section>
      <Heading>
        Preparation <GiDrinkMe />
      </Heading>
      <List as='ol' bullets={true}>
        <Text as='li'>Muddle mint leaves with sugar and lime juice.</Text>
        <Text as='li'>Add a splash of soda water and fill the glass with cracked ice.</Text>
        <Text as='li'>Pour the rum and top with soda water.</Text>
        <Text as='li'>Garnish and serve with straw.</Text>
      </List>
    </Section>
  </Container>
);

export default Cocktail;
