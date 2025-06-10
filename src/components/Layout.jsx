import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children, setCurrentPage }) {
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
