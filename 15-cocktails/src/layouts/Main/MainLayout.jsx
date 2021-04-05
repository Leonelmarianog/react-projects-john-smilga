import React from 'react';
import { Header } from './components';

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

export default MainLayout;
