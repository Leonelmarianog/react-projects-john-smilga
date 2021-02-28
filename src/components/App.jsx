import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import MainLayout from './layouts/MainLayout';
import { About } from '../pages';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <h1>Hello World</h1>
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
