import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BiDrink } from 'react-icons/bi';
import { GiDrinkMe } from 'react-icons/gi';
import { BsPencilSquare } from 'react-icons/bs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { cocktailsAPI } from '../../api/api';
import { fromApiToEntity } from '../../mappers/mappers';

const Container = styled.main`
  padding: 4em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Cocktail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      try {
        setLoading(true);
        setData(null);
        setError(null);

        const { drinks: cocktailData } = await cocktailsAPI.getById(id);

        if (!cocktailData) {
          throw new Error('No results');
        }

        const cocktail = fromApiToEntity(cocktailData[0]);

        setData(cocktail);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setData(null);
      }
    };

    getData(id);
  }, [id]);

  return (
    <Container aria-label="cocktail info page">
      {data && (
        <React.Fragment>
          <Image src={data.image} alt={data.name} />
          <Section>
            <Heading>
              General Info <BiDrink />
            </Heading>
            <List bullets={false}>
              <Text as="li">
                <Label>Name: </Label>
                {data.name}
              </Text>
              <Text as="li">
                <Label>Type: </Label>
                {data.category}
              </Text>
              <Text as="li">
                <Label>Alcoholic?: </Label>
                {data.alcoholic}
              </Text>
              <Text as="li">
                <Label>Glass: </Label>
                {data.glass}
              </Text>
            </List>
          </Section>

          <Section>
            <Heading>
              Ingredients <BsPencilSquare />
            </Heading>
            <List bullets={true}>
              {data.ingredients.map((ingredient, index) => (
                <Text key={index + 1} as="li">
                  {ingredient}
                </Text>
              ))}
            </List>
          </Section>

          <Section>
            <Heading>
              Preparation <GiDrinkMe />
            </Heading>
            <List as="ol" bullets={true}>
              {data.instructions.map((instruction, index) => (
                <Text key={index + 1} as="li">
                  {instruction}
                </Text>
              ))}
            </List>
          </Section>
        </React.Fragment>
      )}
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
    </Container>
  );
};

export default Cocktail;
