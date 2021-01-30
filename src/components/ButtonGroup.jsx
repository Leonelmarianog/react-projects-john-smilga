import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin-right: 1.5em;
  }

  & > button:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

    & > button {
      margin-right: 0;
      margin-bottom: 0.75em;
    }

    & > button:last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: calc(var(--font-size-base) * 1.2);
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  padding-bottom: 0.5em;
  transition: color 0.2s;
  color: ${(props) => (props.active ? 'var(--clr-light-blue-2)' : '')};

  &:hover {
    color: var(--clr-light-blue-2);
  }

  &::before {
    content: '';
    position: absolute;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 0.15em;
    bottom: 0;
    left: ${(props) => (props.active ? '0' : '50%')};
    background-color: var(--clr-light-blue-2);
    transition: all 0.2s;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    padding-left: 0.5em;

    &::before {
      width: 0.15em;
      height: ${(props) => (props.active ? '100%' : '0')};
      bottom: ${(props) => (props.active ? '0' : '50%')};
      left: 0;
    }

    &:hover::before {
      height: 100%;
      width: 0.15em;
      bottom: 0;
    }
  }
`;

const ButtonGroup = () => {
  const [active, setActive] = useState('');

  return (
    <Container role='group' aria-label='companies'>
      <Button active={active === 'lorem1' || false} onClick={() => setActive('lorem1')}>
        lorem1
      </Button>
      <Button active={active === 'lorem2' || false} onClick={() => setActive('lorem2')}>
        lorem2
      </Button>
      <Button active={active === 'lorem3' || false} onClick={() => setActive('lorem3')}>
        lorem3
      </Button>
    </Container>
  );
};

export default ButtonGroup;
