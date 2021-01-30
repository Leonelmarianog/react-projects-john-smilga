import React from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonGroup';
import Content from './Content';

const Container = styled.article`
  margin: 0 2.5em;
  display: grid;
  grid-template-columns: 1fr;

  & > *:nth-child(1) {
    margin-bottom: 1.25em;
  }

  @media screen and (min-width: 768px) {
    column-gap: 4em;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;

    & > *:nth-child(1) {
      margin-bottom: 0;
    }
  }
`;

const Tabs = () => {
  return (
    <Container>
      <ButtonGroup />
      <Content />
    </Container>
  );
};

export default Tabs;
