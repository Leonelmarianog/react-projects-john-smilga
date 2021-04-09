import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { button } from '../styles';

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

const SearchButton = styled.button`
  ${button};

  color: var(--clr-grey-2);
  margin-left: -45px;
  padding: 0.75em;
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-black);
  }
`;

export const Search = ({
  searchTerm,
  setSearchTermCallback,
  setPageCallback,
  setLoadingCallback,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setPageCallback(1);
    setLoadingCallback(true);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Type something...'
        value={searchTerm}
        onChange={(event) => setSearchTermCallback(event.target.value)}
      />
      <SearchButton type='submit' aria-label='search'>
        <FaSearch />
      </SearchButton>
    </Container>
  );
};
