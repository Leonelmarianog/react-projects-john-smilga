import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Title from './Title';
import Categories from './Categories';
import Food from './Food';
import foodsData from '../data/foods.js';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2em;

  & > nav {
    margin: 2em 0;
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      column-gap: 4em;
    }

    & > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3em;
    }

    & > li:last-child {
      margin-bottom: 0;
    }
  }
`;

const getCategories = (foods) => {
  const categories = foods.map((food) => food.category);
  const uniqueCategories = ['All', ...new Set(categories)];
  return uniqueCategories;
};

const App = () => {
  const [allFoods, setAllFoods] = useState(foodsData);
  const [categories, setCategories] = useState(getCategories(allFoods));
  const [selectedFoods, setSelectedFoods] = useState(foodsData);

  const filterFoods = (newCategory) => {
    if (newCategory === 'All') {
      setSelectedFoods(allFoods);
      return;
    }

    const selectedFoods = allFoods.filter((food) => food.category === newCategory);
    setSelectedFoods(selectedFoods);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Title>Our Menu</Title>
        <Categories categories={categories} filterFoodsCallback={filterFoods} />
        <ul aria-label='foods'>
          {selectedFoods.map((food) => (
            <li key={food.id}>
              <Food {...food} />
            </li>
          ))}
        </ul>
      </Container>
    </React.Fragment>
  );
};

export default App;
