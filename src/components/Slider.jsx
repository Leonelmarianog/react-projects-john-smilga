import React from 'react';
import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90vw;
  max-width: 900px;
  height: 300px; // Must set a height, otherwise the element collapses
  overflow: hidden;
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
  ${(props) => props.position === 'left' && 'left: 0.5em;'}
  ${(props) => props.position === 'right' && 'right: 0.5em;'}
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

const PersonInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; // This causes outer article to collapse, since it doesn't have an height
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) => props.status === 'next' && 'transform: translateX(100%); opacity: 0;'};
  ${(props) => props.status === 'active' && 'transform: translateX(0); opacity: 1;'};
  ${(props) => props.status === 'last' && 'transform: translateX(-100%); opacity: 0;'};
  transition: transform 0.3s linear, opacity 0.3s linear;
`;

const Slider = ({ people, index, setIndexCallback }) => (
  <Container>
    {people.map((person, personIndex) => {
      const { id, image, name, quote, title } = person;

      let status = 'next';

      if (personIndex === index) {
        status = 'active';
      }

      if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
        status = 'last';
      }

      return (
        <PersonInfo key={id} status={status}>
          <Photo src={image} alt={name} />
          <Name>{name}</Name>
          <Job>{title}</Job>
          <Quote>
            <p>&ldquo;{quote}&rdquo;</p>
          </Quote>
        </PersonInfo>
      );
    })}
    <Button position='left' onClick={() => setIndexCallback(index - 1)}>
      <FiChevronLeft />
    </Button>
    <Button position='right' onClick={() => setIndexCallback(index + 1)}>
      <FiChevronRight />
    </Button>
  </Container>
);

export default Slider;
