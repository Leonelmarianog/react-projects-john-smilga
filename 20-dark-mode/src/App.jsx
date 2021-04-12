import { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';

const Container = styled.main`
  height: 100vh;
  display: flex;
`;

const Heading = styled.h1`
  margin: auto;
`;

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Container>
      <Heading>Hello World!</Heading>
    </Container>
  </Fragment>
);
