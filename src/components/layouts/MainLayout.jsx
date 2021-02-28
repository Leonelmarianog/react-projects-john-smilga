import React from 'react';
import Header from '../Header';

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

export default MainLayout;
