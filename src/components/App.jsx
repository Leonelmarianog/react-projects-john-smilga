import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Bag from './Bag';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <div>
      <Header />
      <main>
        <Bag />
      </main>
    </div>
  </React.Fragment>
);

export default App;
