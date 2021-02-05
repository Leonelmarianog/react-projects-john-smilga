import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--clr-green-3);
  padding: 0.5em;
  border: 0.25em solid var(--clr-green-4);
  margin-bottom: 1.5em;
`;

const Flash = () => {
  return (
    <Container>
      <h1>Item added successfully</h1>
    </Container>
  );
};

export default Flash;
