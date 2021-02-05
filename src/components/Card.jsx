import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import GroceryList from './GroceryList';
import Flash from './Flash';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
  background-color: var(--clr-white-1);
  width: 80vw;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 0 0.5em 0.15em #00000025;

  @media screen and (min-width: 576px) {
    max-width: 500px;
  }
`;

const Card = () => {
  const [groceries, setGroceries] = useState([]);
  const [input, setInput] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ isVisible: false, message: '', type: '' });

  const addGrocery = (groceryName) => {
    const newGrocery = { id: new Date().getTime().toString(), name: groceryName };
    setGroceries([...groceries, newGrocery]);
    setInput('');
    setAlert({ isVisible: true, message: 'Item Added', type: 'success' });
  };

  const deleteGrocery = (groceryId) => {
    setIsEdit(false);
    const newGroceries = groceries.filter((grocery) => grocery.id !== groceryId);
    setGroceries(newGroceries);
    setIsEdit(false);
    setEditID(null);
    setInput('');
    setAlert({ isVisible: true, message: 'Item Removed', type: 'success' });
  };

  const setEdit = (groceryId) => {
    const groceryToUpdate = groceries.find((grocery) => grocery.id === groceryId);
    setInput(groceryToUpdate.name);
    setIsEdit(true);
    setEditID(groceryId);
  };

  const editGrocery = (groceryId, groceryName) => {
    const newGroceries = groceries.map((grocery) => {
      if (grocery.id === groceryId) {
        return { ...grocery, name: groceryName };
      }
      return grocery;
    });
    setGroceries(newGroceries);
    setIsEdit(false);
    setEditID(null);
    setInput('');
    setAlert({ isVisible: true, message: 'Item Modified', type: 'success' });
  };

  return (
    <Container>
      {alert.isVisible && <Flash {...alert} groceries={groceries} setAlertCallback={setAlert} />}
      <Form
        input={input}
        setInputCallback={setInput}
        addGroceryCallback={addGrocery}
        editGroceryCallback={editGrocery}
        isEdit={isEdit}
        editID={editID}
        setAlertCallback={setAlert}
      />
      {groceries.length > 0 && (
        <GroceryList
          groceries={groceries}
          deleteGroceryCallback={deleteGrocery}
          setEditCallback={setEdit}
        />
      )}
    </Container>
  );
};

export default Card;
