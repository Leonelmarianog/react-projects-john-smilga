import React from 'react';
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Container = styled.section`
  & > *:nth-child(2) {
    margin: 0.5em 0;
  }

  & > *:nth-child(3) {
    margin-bottom: 1.25em;
  }
`;

const Job = styled.h1`
  text-transform: capitalize;
`;

const Company = styled.p`
  color: var(--clr-light-blue-1);
  background-color: var(--clr-light-blue-2);
  width: max-content;
  padding: 0.2em 0.75em;
  border-radius: 2.5px;
  text-transform: capitalize;
`;

const Dates = styled.p`
  color: var(--clr-light-blue-2);
  text-transform: capitalize;
`;

const Duties = styled.section`
  & > * {
    margin-bottom: 1.25em;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const Duty = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    height: 1.5em;
    width: 1.5em;
    margin-right: 1em;
    color: var(--clr-light-blue-2);
  }
`;

const Content = () => (
  <Container>
    <Job>Lorem ipsum dolor sit.</Job>
    <Company>lorem 1</Company>
    <Dates>Lorem ipsum dolor sit amet.</Dates>
    <Duties>
      <Duty>
        <FaAngleDoubleRight />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi, soluta corrupti
          assumenda tempora sit.
        </p>
      </Duty>
      <Duty>
        <FaAngleDoubleRight />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi, soluta corrupti
          assumenda tempora sit.
        </p>
      </Duty>
      <Duty>
        <FaAngleDoubleRight />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi, soluta corrupti
          assumenda tempora sit.
        </p>
      </Duty>
    </Duties>
  </Container>
);

export default Content;
