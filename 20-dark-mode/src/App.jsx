import { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from './styles';
import { Header, ArticleList } from './components';
import { useDarkMode } from './hooks';
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
  const [theme, themeToggler, isThemeLoaded] = useDarkMode();

  const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    isThemeLoaded && (
      <ThemeProvider theme={currentTheme}>
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
    )
  );
};
