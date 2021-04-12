import styled from 'styled-components';
import { button } from '../styles';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  font-size: calc(var(--font-size-base) * 2);
`;

const Button = styled.button`
  ${button};

  background-color: ${({ theme }) => theme.primaryColor};
  padding: 0.5em 0.75em;
  border-radius: 5px;
  color: ${({ theme }) => theme.bcgColor};
  font-weight: bold;
  letter-spacing: 1px;
  margin: auto 0;
  transition: background-color 0.2s linear, color 0.2s linear;
`;

export const Header = ({ themeTogglerCallback }) => (
  <Container>
    <Heading>
      <Link href='/'>Overreacted</Link>
    </Heading>
    <Button onClick={themeTogglerCallback}>Toggle</Button>
  </Container>
);
