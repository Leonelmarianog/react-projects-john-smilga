import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Container = styled.article`
  background-color: var(--clr-white-1);
  width: 250px;
  padding: 2em;
  margin: 2em auto;
  border-radius: 5px;
  box-shadow: 0.15em 0.15em 1em 0.25em #00000025;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    min-width: 450px;
    width: 50vw;
  }

  & > p {
    color: var(--clr-blue-1);
  }
`;

const Portrait = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    height: 8em;
    width: 8em;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0.25em -0.25em 0em 0.15em var(--clr-blue-3);
  }

  & > div {
    background-color: var(--clr-blue-3);
    color: var(--clr-white-1);
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25em;
    font-size: calc(var(--font-size-base) * 1.25);
    position: absolute;
    top: 0;
    left: 0;
  }

  & > h3 {
    color: var(--clr-blue-1);
    font-weight: bold;
    text-transform: capitalize;
    margin-top: 0.5em;
  }

  & > h2 {
    color: var(--clr-blue-3);
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }
`;

const Pagination = styled.div`
  display: flex;
  margin-top: 1em;
  margin-bottom: 1.5em;

  & > button {
    background-color: var(--clr-blue-4);
    color: var(--clr-white-1);
    width: 2em;
    height: 2em;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25em;
    font-size: calc(var(--font-size-base) * 1.25);
    margin: 0 2em;
    transition: background-color 0.2s, transform 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--clr-blue-3);
    }
  }
`;

const SurpriseMeButton = styled.button`
  background-color: var(--clr-blue-4);
  color: var(--clr-white-1);
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--clr-blue-3);
  }
`;

const Card = ({ name, job, image, bio }) => (
  <Container>
    <Portrait>
      <img src={image} alt={name} />
      <div>
        <FaQuoteRight />
      </div>
      <h3>{name}</h3>
      <h2>{job}</h2>
    </Portrait>
    <p>{bio}</p>
    <Pagination>
      <button>
        <FaChevronLeft />
      </button>
      <button>
        <FaChevronRight />
      </button>
    </Pagination>
    <SurpriseMeButton>Surprise Me</SurpriseMeButton>
  </Container>
);

export default Card;
