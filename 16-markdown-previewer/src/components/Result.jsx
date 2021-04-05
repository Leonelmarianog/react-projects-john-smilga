import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Container = styled.article`
  padding: 0 2em;
  border-radius: 5px;
  background-color: var(--clr-aquagreen-2);
`;

export const Result = ({ markdown }) => (
  <Container>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </Container>
);
