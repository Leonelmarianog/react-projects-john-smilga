import React, { useState, useEffect } from 'react';
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
  min-width: max-content;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 0.5em 0.15em #00000025;

  @media screen and (min-width: 576px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: var(--clr-blue-2);
  color: var(--clr-white-1);
  padding: 0.5em 1em;
  border-radius: 5px;
  margin-top: 2em;
  color: var(--clr-black-1);
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: calc(var(--font-size-base) * 1.25);
  font-weight: bold;

  &:hover {
    background-color: var(--clr-blue-1);
  }
`;

const getGroceries = () => {
  const groceries = JSON.parse(localStorage.getItem('groceries'));

  if (!groceries || groceries.length === 0) {
    return [];
  }

  return groceries;
};

const Card = () => {
  const [groceries, setGroceries] = useState(getGroceries());
  const [input, setInput] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ isVisible: false, message: '', type: '' });
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setEvent('STORAGE_FULL');
    }
  }, [error]);

  useEffect(() => {
    try {
      localStorage.setItem('groceries', JSON.stringify(groceries));
    } catch (error) {
      setError(true);
      setGroceries(getGroceries());
    }
  }, [groceries]);

  useEffect(() => {
    if (event) {
      switch (event) {
        case 'ITEM_ADDED':
          setInput('');
          setAlert({ isVisible: true, message: 'Item Added', type: 'success' });
          break;
        case 'ITEM_MODIFIED':
          setIsEdit(false);
          setEditID(null);
          setInput('');
          setAlert({ isVisible: true, message: 'Item Modified', type: 'success' });
          break;
        case 'ITEM_REMOVED':
          setIsEdit(false);
          setEditID(null);
          setInput('');
          setAlert({ isVisible: true, message: 'Item Removed', type: 'success' });
          break;
        case 'CLEAR':
          setIsEdit(false);
          setEditID(null);
          setInput('');
          setAlert({ isVisible: true, message: 'List Cleared', type: 'success' });
          break;
        case 'STORAGE_FULL':
          setIsEdit(false);
          setEditID(null);
          setInput('');
          setAlert({
            isVisible: true,
            message: 'No space left, delete some items',
            type: 'danger',
          });
          setError(false);
          break;
        default:
          return;
      }
      setEvent(null);
    }
  }, [event]);

  const addGrocery = (groceryName) => {
    const newGrocery = { id: new Date().getTime().toString(), name: groceryName };
    setGroceries([...groceries, newGrocery]);
    setEvent('ITEM_ADDED');
  };

  const editGrocery = (groceryId, groceryName) => {
    const newGroceries = groceries.map((grocery) => {
      if (grocery.id === groceryId) {
        return { ...grocery, name: groceryName };
      }
      return grocery;
    });
    setGroceries(newGroceries);
    setEvent('ITEM_MODIFIED');
  };

  const deleteGrocery = (groceryId) => {
    const newGroceries = groceries.filter((grocery) => grocery.id !== groceryId);
    setGroceries(newGroceries);
    setEvent('ITEM_REMOVED');
  };

  const prepareEdit = (groceryId) => {
    const groceryToUpdate = groceries.find((grocery) => grocery.id === groceryId);
    setInput(groceryToUpdate.name);
    setIsEdit(true);
    setEditID(groceryId);
  };

  const clearAll = () => {
    setGroceries([]);
    setEvent('CLEAR');
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
          prepareEditCallback={prepareEdit}
        />
      )}
      {groceries.length > 0 && <Button onClick={clearAll}>Clear All</Button>}
    </Container>
  );
};

export default Card;
