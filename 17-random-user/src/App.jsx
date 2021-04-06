import { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { Background, Card } from './components';

const Container = styled.main`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rows = [
  {
    size: '50vh',
    color: '--clr-grey',
  },
  {
    size: '50vh',
    color: '--clr-red-1',
  },
];

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Container>
      <Background position={'fixed'} rows={rows} />
      <Card />
    </Container>
  </Fragment>
);
