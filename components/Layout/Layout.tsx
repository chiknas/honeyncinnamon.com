import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
