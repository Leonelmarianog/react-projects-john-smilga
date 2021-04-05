import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from '../Form';

describe('Form', () => {
  it('Renders Correctly', () => {
    render(
      <Form
        input=''
        setInputCallback={() => {}}
        addGroceryCallback={() => {}}
        editGroceryCallback={() => {}}
        isEdit={false}
        editID={null}
      />
    );

    expect(screen.getByPlaceholderText('e.g. eggs')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('Calls the onChange callback handler', () => {
    const setInputCallbackMock = jest.fn();

    render(
      <Form
        input=''
        setInputCallback={setInputCallbackMock}
        addGroceryCallback={() => {}}
        editGroceryCallback={() => {}}
        isEdit={false}
        editID={null}
      />
    );

    const userInput = 'eggs';
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), userInput);

    expect(setInputCallbackMock).toHaveBeenCalledTimes(userInput.length);

    for (let i = 0; i < userInput.length; i += 1) {
      expect(setInputCallbackMock).toHaveBeenNthCalledWith(i + 1, userInput[i]);
    }
  });

  it('Calls the addGrocery callback function when adding a new item', () => {
    const addGroceryCallbackMock = jest.fn();
    const userInput = 'eggs';

    render(
      <Form
        input={userInput}
        setInputCallback={() => {}}
        addGroceryCallback={addGroceryCallbackMock}
        editGroceryCallback={() => {}}
        isEdit={false}
        editID={null}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(addGroceryCallbackMock).toHaveBeenCalledTimes(1);
    expect(addGroceryCallbackMock).toHaveBeenCalledWith(userInput);
  });

  it('Calls the editGrocery callback function when modifying an existing item', () => {
    const editGroceryCallbackMock = jest.fn();
    const userInput = 'milk';
    const itemId = 1;

    render(
      <Form
        input={userInput}
        setInputCallback={() => {}}
        addGroceryCallback={() => {}}
        editGroceryCallback={editGroceryCallbackMock}
        isEdit={true}
        editID={itemId}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Edit' }));

    expect(editGroceryCallbackMock).toHaveBeenCalledTimes(1);
    expect(editGroceryCallbackMock).toHaveBeenCalledWith(itemId, userInput);
  });
});
