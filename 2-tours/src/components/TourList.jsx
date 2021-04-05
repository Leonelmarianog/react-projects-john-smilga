import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tour from './Tour';
import Button from './Button';

const apiUrl = 'https://course-api.com/react-tours-project';

const Container = styled.ul`
  list-style: none;
`;

const TourList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Something happened!');
      }
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const removeTour = (tourId) => {
    const newTours = tours.filter((tour) => tour.id !== tourId);
    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h2>Oops! Something went wrong! Please try again.</h2>
      </Container>
    );
  }

  if (tours.length === 0) {
    return (
      <Container>
        <Button callback={getTours}>Refresh</Button>
      </Container>
    );
  }

  return (
    <Container>
      {tours.length > 0 &&
        tours.map((tour) => <Tour key={tour.id} {...tour} removeTourCallback={removeTour} />)}
    </Container>
  );
};

export default TourList;
