import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.p`
  text-transform: capitalize;
  font-size: calc(var(--font-size-base) * 1.25);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button:first-child {
    margin-right: 0.75em;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: calc(var(--font-size-base) * 1.5);
  cursor: pointer;
  transition: color 0.3s;
  padding: 0.25em;

  &:hover {
    ${(props) => props.action === 'edit' && 'color: var(--clr-orange-1);'};
    ${(props) => props.action === 'delete' && 'color: var(--clr-red-1);'};
  }
`;

const Grocery = () => {
  return (
    <Container>
      <Item>Eggs</Item>
      <ButtonGroup>
        <Button action='edit' aria-label='edit item'>
          <FaEdit />
        </Button>
        <Button action='delete' aria-label='delete item'>
          <FaTrash />
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Grocery;
