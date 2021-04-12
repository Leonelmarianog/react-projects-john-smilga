import styled from 'styled-components';
import { Article } from './Article';

const Container = styled.main`
  display: flex;
  flex-direction: column;

  & > article {
    margin: 0.7em 0;
  }
`;

export const ArticleList = ({ articles }) => (
  <Container>
    {articles.length > 0 &&
      articles.map((article) => <Article key={article.id} {...article} />)}
  </Container>
);
