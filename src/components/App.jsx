import React from 'react';
import { AppProvider } from '../contexts/GlobalContext';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Bag from './Bag';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <AppProvider>
      <div>
        <Header />
        <main>
          <Bag />
        </main>
      </div>
    </AppProvider>
  </React.Fragment>
);

export default App;
