import styled from 'styled-components';
import { button } from '../styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const BorderButton = styled.button`
  ${button};

  font-weight: bold;
`;

const Button = styled.button`
  ${button};

  background-color: var(--clr-yellow-3);
  padding: 0.5em 0.75em;
  border-radius: 5px;
  margin: 0 0.5em;
  font-weight: bold;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: var(--clr-yellow-2);
  }
`;

export const Pagination = ({ pages, setPageCallback }) => {
  const handleNext = () => {
    setPageCallback((lastPage) => {
      const nextPage = lastPage + 1;

      if (nextPage > pages.length - 1) {
        return 0;
      }

      return nextPage;
    });
  };

  const handlePrev = () => {
    setPageCallback((lastPage) => {
      const prevPage = lastPage - 1;

      if (prevPage < 0) {
        return pages.length - 1;
      }

      return prevPage;
    });
  };

  return (
    <Container>
      <BorderButton onClick={handlePrev}>Prev</BorderButton>
      {pages.map((_, index) => (
        <Button key={index + 1} onClick={() => setPageCallback(index)}>
          {index + 1}
        </Button>
      ))}
      <BorderButton onClick={handleNext}>Next</BorderButton>
    </Container>
  );
};
