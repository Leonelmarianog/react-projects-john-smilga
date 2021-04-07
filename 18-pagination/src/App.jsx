import { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { CardList, Pagination } from './components';

const Container = styled.main`
  padding: 2em 1em;
`;

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Container>
      <CardList />
      <Pagination />
    </Container>
  </Fragment>
);
