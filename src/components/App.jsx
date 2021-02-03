import React, { useState } from 'react';
import styled from 'styled-components';
import Values from 'values.js';
import Color from './Color';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
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

const ColorContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2em;
`;

const App = () => {
  const [hexColor, setHexColor] = useState('');
  const [colors, setColors] = useState(new Values('#ffd000').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const colors = new Values(hexColor).all(10);
      setColors(colors);
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setError(false);
    setHexColor(event.target.value);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Header title='Color Generator' />
        <Main>
          <Form onSubmit={handleSubmit}>
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
              {error ? 'Input must be hexadecimal!' : 'Please insert an hexadecimal number'}
            </Helper>
            <Button type='submit'>Generate</Button>
          </Form>
          <ColorContainer>
            {colors.map((color, index) => {
              const { hex: colorHex, weight: colorWeight } = color;
              return <Color key={index + 1} colorWeight={colorWeight} colorHex={colorHex} />;
            })}
          </ColorContainer>
        </Main>
      </Container>
    </React.Fragment>
  );
};

export default App;
