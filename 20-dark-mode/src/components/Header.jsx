import styled from 'styled-components';
import { ThemeToggler } from './ThemeToggler';

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

export const Header = ({ themeTogglerCallback }) => (
  <Container>
    <Heading>
      <Link href='/'>Overreacted</Link>
    </Heading>
    <ThemeToggler themeTogglerCallback={themeTogglerCallback}>
      Toggle
    </ThemeToggler>
  </Container>
);
