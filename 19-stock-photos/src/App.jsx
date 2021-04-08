import { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { Search, PhotoList } from './components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
`;

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Container>
      <Search />
      <PhotoList />
    </Container>
  </Fragment>
);
