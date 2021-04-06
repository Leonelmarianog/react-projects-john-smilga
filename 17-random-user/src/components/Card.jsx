import styled from 'styled-components';
import {
  FaUser,
  FaEnvelopeOpen,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
import { Background } from './Background';
import { button } from '../styles';

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

const Text = styled.p`
  margin: 0 0 1em 0;
`;

const Name = styled.h1`
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

export const Card = () => (
  <Container>
    <Background position={'absolute'} rows={rows} />
    <Image
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
      alt=""
    />
    <Text>My Name is</Text>
    <Name>Ella Stevens</Name>
    <IconContainer>
      <Icon>
        <FaUser />
      </Icon>
      <Icon>
        <FaEnvelopeOpen />
      </Icon>
      <Icon>
        <FaCalendarTimes />
      </Icon>
      <Icon>
        <FaMap />
      </Icon>
      <Icon>
        <FaPhone />
      </Icon>
      <Icon>
        <FaLock />
      </Icon>
    </IconContainer>
    <RandomUserButton>Random User</RandomUserButton>
  </Container>
);
