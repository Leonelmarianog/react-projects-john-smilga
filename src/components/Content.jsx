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
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 1em;

  & > *:first-child {
    color: var(--clr-light-blue-2);
  }
`;

const Content = ({ title, company, dates, duties }) => (
  <Container>
    <Job>{title}</Job>
    <Company>{company}</Company>
    <Dates>{dates}</Dates>
    <Duties>
      {duties.map((duty, index) => (
        <Duty key={index + 1}>
          <FaAngleDoubleRight />
          <p>{duty}</p>
        </Duty>
      ))}
    </Duties>
  </Container>
);

export default Content;
