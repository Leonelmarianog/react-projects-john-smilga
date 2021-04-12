import { useState, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from './styles';
import { Header, ArticleList } from './components';
import { articles } from './data/articles';

const ContainerWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  min-width: 25rem;
  max-width: 42rem;
  padding: 2.75em 1.3em;
`;

export const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    console.log(theme);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider
      theme={theme === 'light' ? themes.lightTheme : themes.darkTheme}
    >
      <Fragment>
        <GlobalStyles />
        <ContainerWrapper>
          <Container>
            <Header themeTogglerCallback={themeToggler} />
            <ArticleList articles={articles} />
          </Container>
        </ContainerWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
