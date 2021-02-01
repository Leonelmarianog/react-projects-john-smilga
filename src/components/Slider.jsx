import React from 'react';
import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import peopleData from '../data/people';

const { image, name, quote, title } = peopleData[0];

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80vw;
  max-width: 900px;
`;

const Photo = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  object-fit: cover;
  border: 0.25em solid var(--clr-blue-2);
  box-shadow: 0em 0em 0.5em 0.25em #00000025;
  margin-bottom: 0.5em;
`;

const Button = styled.button`
  position: absolute;
  ${(props) => props.position === 'left' && 'left: 0;'}
  ${(props) => props.position === 'right' && 'right: 0;'}
  top: 50%;
  background-color: var(--clr-blue-2);
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  box-shadow: 0em 0em 0.5em 0.25em #00000025;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--clr-orange-1);
  }

  & > * {
    font-size: calc(var(--font-size-base) * 1.5);
    color: var(--clr-white-1);
  }
`;

const Name = styled.h1`
  font-size: calc(var(--font-size-base) * 1.35);
  color: var(--clr-orange-1);
  text-transform: capitalize;
`;

const Job = styled.h2`
  font-size: calc(var(--font-size-base) * 1.2);
  font-weight: lighter;
  text-transform: capitalize;
  color: var(--clr-blue-3);
`;

const Quote = styled.blockquote`
  margin-top: 1em;
  margin-left: 4em;
  margin-right: 4em;
  color: var(--clr-blue-3);
`;

const Slider = () => (
  <Container>
    <Photo src={image} alt={name} />
    <Name>{name}</Name>
    <Job>{title}</Job>
    <Quote>
      <p>&ldquo;{quote}&rdquo;</p>
    </Quote>
    <Button position='left'>
      <FiChevronLeft />
    </Button>
    <Button position='right'>
      <FiChevronRight />
    </Button>
  </Container>
);

export default Slider;
