import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import MainLayout from './layouts/MainLayout';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <h1>Hello World</h1>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  </React.Fragment>
);

export default App;
