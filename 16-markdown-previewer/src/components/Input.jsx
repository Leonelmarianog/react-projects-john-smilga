import styled from 'styled-components';

const TextArea = styled.textarea`
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0 0 0.5em 0.5em var(--clr-shadow);
`;

export const Input = ({ markdown, setMarkdownCallback }) => (
  <TextArea
    value={markdown}
    onChange={(event) => setMarkdownCallback(event.target.value)}
  />
);
