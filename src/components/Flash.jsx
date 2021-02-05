import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.type === 'success' && 'background-color: var(--clr-green-3);'};
  ${(props) => props.type === 'success' && 'border: 0.25em solid var(--clr-green-4);'};
  ${(props) => props.type === 'danger' && 'background-color: var(--clr-red-3);'};
  ${(props) => props.type === 'danger' && 'border: 0.25em solid var(--clr-red-2);'};
  padding: 0.5em;
  margin-bottom: 1.5em;
`;

const Flash = ({ message, type, groceries, setAlertCallback }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlertCallback({ isVisible: false, message: '', type: '' });
    }, 3000);

    return () => clearTimeout(timerId);
  }, [groceries, setAlertCallback]);
  return (
    <Container type={type}>
      <h1>{message}</h1>
    </Container>
  );
};

export default Flash;
