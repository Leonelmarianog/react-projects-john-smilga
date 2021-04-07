import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FaUser,
  FaEnvelopeOpen,
  FaBirthdayCake,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
import { Background } from './Background';
import { button } from '../styles';
import { fromApiToEntity } from '../mappers/userMapper';
import { randomUsersApi } from '../api/api';

const Container = styled.article`
  position: relative;
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 0.5em 0.5em var(--clr-shadow);
  padding: 2em 1em;
`;

const Image = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
  border: 0.25em solid var(--clr-white);
  box-shadow: 0 0 0.5em 0.25em var(--clr-shadow);
  object-fit: cover;
  margin-bottom: 2em;
`;

const Title = styled.p`
  margin: 0 0 1em 0;
`;

const Property = styled.h1`
  font-size: calc(var(--font-size-base) * 1.5);
  text-transform: capitalize;
  margin: 0;
`;

const IconContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  justify-content: space-evenly;
  align-self: stretch;
`;

const Icon = styled.button`
  ${button}

  margin: 0 0.25em;
  color: var(--clr-red-3);
  transition: color 0.2s linear;

  & > svg {
    height: auto;
    width: 1.5em;
  }

  &:hover {
    color: var(--clr-red-2);
  }
`;

const RandomUserButton = styled.button`
  ${button}

  background-color: var(--clr-red-2);
  color: var(--clr-white);
  border-radius: 5px;
  padding: 0.5em 0.75em;
  transition: color 0.2s linear, background-color 0.2s linear;

  &:hover {
    background-color: var(--clr-red-1);
    color: var(--clr-black);
  }
`;

const rows = [
  {
    size: '30%',
    color: '--clr-red-1',
    border: true,
  },
  {
    size: '70%',
    color: '--clr-white',
  },
];

export const Card = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('Hi!, My name is');
  const [property, setProperty] = useState('name');

  const getUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await randomUsersApi.getUser();

      if (!data || !data.results) {
        throw new Error('No results');
      }

      const userData = data.results[0];
      const user = fromApiToEntity(userData);
      setUser(user);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleClick = (event) => {
    const { title, label } = event.currentTarget.dataset;
    setProperty(label);
    setTitle(title);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Background position={'absolute'} rows={rows} />
      <Image src={user ? user.image : ''} alt={user && user.name} />
      <Title>{title}</Title>
      <Property>
        {user ? user[property] : 'Loading...'}
        {error && error.message}
      </Property>
      <IconContainer>
        <Icon
          data-title="Hi!, my name is"
          data-label="name"
          onClick={handleClick}
        >
          <FaUser />
        </Icon>
        <Icon data-title="My email is" data-label="email" onClick={handleClick}>
          <FaEnvelopeOpen />
        </Icon>
        <Icon data-title="My age is" data-label="age" onClick={handleClick}>
          <FaBirthdayCake />
        </Icon>
        <Icon data-title="I live in" data-label="country" onClick={handleClick}>
          <FaMap />
        </Icon>
        <Icon
          data-title="My phone number is"
          data-label="phone"
          onClick={handleClick}
        >
          <FaPhone />
        </Icon>
        <Icon
          data-title="My password is"
          data-label="password"
          onClick={handleClick}
        >
          <FaLock />
        </Icon>
      </IconContainer>
      <RandomUserButton onClick={getUser}>
        {loading ? 'Loading...' : 'Random User'}
      </RandomUserButton>
    </Container>
  );
};
