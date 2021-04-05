import styled from 'styled-components';
import { Fragment, useState } from 'react';
import { GlobalStyles } from './styles';
import { Input } from './components/Input';
import { Result } from './components/Result';

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 2em;
  padding: 2em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    height: 100vh;
    min-height: 100vh;
  }
`;

export const App = () => {
  const [markdown, setMarkdown] = useState('# Markdown Previewer');

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Input markdown={markdown} setMarkdownCallback={setMarkdown} />
        <Result markdown={markdown} />
      </Container>
    </Fragment>
  );
};
