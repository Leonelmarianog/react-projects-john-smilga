import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { MainLayout } from './layouts';
import { Home, Cocktail, About } from './pages';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/cocktail/:id'>
            <Cocktail />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  </React.Fragment>
);

export default App;
