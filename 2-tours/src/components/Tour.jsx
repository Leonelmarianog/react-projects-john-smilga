import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.article`
  width: 250px;
  border-radius: 5px;
  background-color: var(--clr-white-2);
  box-shadow: 0.15em 0.15em 0.5em 0.25em #00000025;
  margin: 2em;

  @media screen and (min-width: 576px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 30vw;
    min-width: 450px;
  }

  & > img {
    width: 100%;
    height: 15em;
  }

  & > div {
    display: flex;
    flex-direction: column;
    padding: 1em;

    & > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > span {
        background-color: var(--clr-green);
        color: var(--clr-white-2);
        padding: 0.25em 0.5em;
        border-radius: 5px;
        font-size: calc(var(--font-size-base) * 1.2);
        font-weight: bold;
      }
    }

    & > p {
      margin: 1em 0;

      & > button {
        background: none;
        border: none;
        color: var(--clr-blue);
        cursor: pointer;
      }
    }

    & > button {
      align-self: center;
    }
  }
`;

const Tour = ({ id, name, info, image, price, removeTourCallback }) => {
  const [truncated, setTruncated] = useState(true);

  return (
    <Container>
      <img src={image} alt={name} />
      <div>
        <header>
          <h3>{name}</h3>
          <span>${price}</span>
        </header>
        <p>
          {truncated ? `${info.substring(0, 200)}... ` : `${info} `}
          <button onClick={() => setTruncated(!truncated)}>
            {truncated ? 'Read more' : 'Read less'}
          </button>
        </p>
        <Button callback={() => removeTourCallback(id)}>Not Interested</Button>
      </div>
    </Container>
  );
};

export default Tour;
