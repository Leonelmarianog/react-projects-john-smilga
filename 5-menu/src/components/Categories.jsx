import React from 'react';
import styled from 'styled-components';

const MenuBar = styled.menu`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    margin-right: 1em;
  }

  & > li:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: var(--clr-yellow-2);
  font-size: calc(var(--font-size-base) * 1.15);
  padding: 0.5em 1em;
  border-radius: 2.5px;
  border: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-yellow-2);
    color: var(--clr-white-1);
  }
`;

const Categories = ({ categories, filterFoodsCallback }) => (
  <nav>
    <MenuBar aria-label='menubar'>
      {categories.map((category, index) => (
        <li key={index + 1} arial-label='menuitem'>
          <Button onClick={() => filterFoodsCallback(category)}>{category}</Button>
        </li>
      ))}
    </MenuBar>
  </nav>
);

export default Categories;
