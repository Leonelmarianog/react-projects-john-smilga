import React, { useState } from 'react';
import styled from 'styled-components';
import Values from 'values.js';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? 'var(--clr-red-2)' : 'var(--clr-black-1)')};
  padding: 0.25em;
  font-size: calc(var(--font-size-base) * 1.25);
`;

const Helper = styled.span`
  color: ${(props) => (props.error ? 'var(--clr-red-2)' : 'var(--clr-black-1)')};
  margin-top: 0.75em;
`;

const Button = styled.button`
  background-color: var(--clr-red-1);
  padding: 0.5em 0.75em;
  border-radius: 5px;
  border: none;
  margin-top: 1em;
  cursor: pointer;
  font-size: calc(var(--font-size-base) * 1.2);
  color: var(--clr-white-1);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-red-2);
  }
`;

const Form = ({ setColorsCallback }) => {
  const [hexColor, setHexColor] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const colors = new Values(hexColor).all(10);
      setColorsCallback(colors);
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setError(false);
    setHexColor(event.target.value);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type='text'
        name='color'
        id='color'
        value={hexColor}
        placeholder='#ffd000'
        onChange={handleChange}
        error={error}
      />
      <Helper error={error}>
        {error ? 'Input not valid!' : 'Please insert a valid CSS color'}
      </Helper>
      <Button type='submit'>Generate</Button>
    </Container>
  );
};

export default Form;
