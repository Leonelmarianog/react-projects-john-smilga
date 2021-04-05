import React, { useState } from 'react';
import styled from 'styled-components';
import Values from 'values.js';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Form from './Form';
import ColorsContainer from './ColorsContainer';

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

const App = () => {
  const [colors, setColors] = useState(new Values('#ffd000').all(10));

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Header title='Color Generator' />
        <Main>
          <Form setColorsCallback={setColors} />
          <ColorsContainer colors={colors} />
        </Main>
      </Container>
    </React.Fragment>
  );
};

export default App;
