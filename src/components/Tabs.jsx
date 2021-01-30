import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonGroup';
import Content from './Content';

const url = 'https://course-api.com/react-tabs-project';

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

const getCompanies = (jobs) => {
  const companies = jobs.map((job) => job.company);
  return companies;
};

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: undefined });
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const getIndex = (company) => {
    const newIndex = jobs.findIndex((job) => job.company === company);
    setIndex(newIndex);
  };

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Oops, something happened, try again later.');
      }
      const jobs = await response.json();
      if (jobs.length === 0) {
        throw new Error('No results.');
      }
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({ status: true, message: error.message });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {jobs.length > 0 && (
        <Container>
          <ButtonGroup companies={getCompanies(jobs)} getIndexCallback={getIndex} />
          <Content {...jobs[index]} />
        </Container>
      )}
    </React.Fragment>
  );
};

export default Tabs;
