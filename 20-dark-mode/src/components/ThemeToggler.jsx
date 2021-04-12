import styled from 'styled-components';
import { button } from '../styles';

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

export const ThemeToggler = ({ themeTogglerCallback }) => (
  <Button onClick={themeTogglerCallback}>Toggle Theme</Button>
);
