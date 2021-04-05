import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 60%;
  min-width: 225px;

  @media screen and (min-width: 576px) {
    width: 70%;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 90%;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: 150px;
  border: 0.25em solid var(--clr-yellow-2);
  border-radius: 5px;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 576px) {
    max-height: 250px;
  }

  @media screen and (min-width: 768px) {
    max-height: 150px;
    min-height: 150px;
    width: 25%; /* If I don't put both images are messed up  */
    min-width: 25%; /* If I don't put both images are messed up  */
  }

  @media screen and (min-width: 992px) {
    width: 40%; /* If I don't put both images are messed up  */
    min-width: 40%; /* If I don't put both images are messed up  */
  }
`;

const Info = styled.section`
  @media screen and (min-width: 768px) {
    margin-left: 1.5em;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted var(--clr-black-1);
  padding-bottom: 0.5em;
  margin-top: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 1em;
  }

  & > h3 {
    text-transform: capitalize;
    font-weight: bold;
  }

  & > h3:last-child {
    color: var(--clr-yellow-2);
    margin-left: 1em;
  }
`;

const Food = ({ title, price, img, desc }) => (
  <Container>
    <Image src={img} alt={title} />
    <Info>
      <Header>
        <h3>{title}</h3>
        <h3>${price}</h3>
      </Header>
      <p>{desc}</p>
    </Info>
  </Container>
);

export default Food;
