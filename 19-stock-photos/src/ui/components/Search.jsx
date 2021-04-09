import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2em 1em;
`;

const Input = styled.input`
  border: none;
  padding: 0.75em 1em;
  width: 90%;
  max-width: 300px;
  border-radius: 50px;
`;

export const Search = ({ searchTerm, setSearchTermCallback }) => (
  <Container>
    <Input
      type='text'
      placeholder='Type something...'
      value={searchTerm}
      onChange={(event) => setSearchTermCallback(event.target.value)}
    />
  </Container>
);
