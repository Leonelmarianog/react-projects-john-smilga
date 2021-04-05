import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  background-color: var(--clr-blue-1);
  font-size: calc(var(--font-size-base) * 1.25);
`;

const Button = styled.button`
  border: none;
  background-color: var(--clr-blue-2);
  color: var(--clr-white-1);
  padding: 0.5em 1em;
  border-radius: 5px;
  margin-top: 0.75em;
  color: var(--clr-black-1);
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: calc(var(--font-size-base) * 1.25);
  font-weight: bold;

  &:hover {
    background-color: var(--clr-blue-1);
  }

  @media screen and (min-width: 576px) {
    margin-top: 0;
    margin-left: 1.25em;
  }
`;

const Form = ({
  input,
  setInputCallback,
  addGroceryCallback,
  editGroceryCallback,
  isEdit,
  editID,
}) => {
  const handleChange = (event) => {
    setInputCallback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input && !isEdit) {
      addGroceryCallback(input);
    }

    if (input && isEdit) {
      editGroceryCallback(editID, input);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type='text'
        name='groceryName'
        id='groceryName'
        placeholder='e.g. eggs'
        value={input}
        onChange={handleChange}
        required
      />
      <Button type='submit'>{isEdit ? 'Edit' : 'Add'}</Button>
    </Container>
  );
};

export default Form;
