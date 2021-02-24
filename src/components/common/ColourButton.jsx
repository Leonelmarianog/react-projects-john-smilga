import styled from 'styled-components';
import Button from './Button';

const ColourButton = styled(Button)`
  color: var(--clr-white-1);
  font-weight: bold;
  padding: 0.5em 1.5em;
  border: 1px solid var(--clr-orange-1);
  border-radius: 5px;
  transition: color 0.2s linear, background-color 0.2s linear;

  &:hover {
    color: var(--clr-black-1);
    background-color: var(--clr-orange-1);
  }
`;

export default ColourButton;
