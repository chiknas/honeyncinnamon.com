import React from 'react';
import { Header } from '../Header/Header';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
