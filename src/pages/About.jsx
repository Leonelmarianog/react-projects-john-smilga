import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: calc(var(--font-size-base) * 1.25);

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 2);
  }
`;

const Text = styled.p`
  font-size: calc(var(--font-size-base) * 0.75);
  width: 80%;

  @media screen and (min-width: 576px) {
    font-size: calc(var(--font-size-base) * 1);
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1);
    width: 550px;
  }
`;

const About = () => (
  <Container>
    <Heading>About Us</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni enim laboriosam
      reprehenderit necessitatibus perspiciatis doloremque tenetur nostrum quibusdam quis,
      voluptatibus velit libero sit consequuntur in? Est nulla sint cum sed dicta hic, facere ipsam
      voluptatibus, commodi porro dolor quisquam, praesentium harum nemo molestias placeat officiis
      doloribus sunt? Numquam, asperiores?
    </Text>
  </Container>
);

export default About;
