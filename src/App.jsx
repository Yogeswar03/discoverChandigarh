import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Places from './Pages/Places';
import Commute from './Pages/Commute';
import Food from './Pages/Food';
import Hotels from './Pages/Hotels';
import Weather from './Pages/Weather';
import Reach from './Pages/Reach';
import Gallery from './Pages/Gallery';
import History from './Pages/History';


function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  return (
    <>
      {currentPage === 'home' && (
        <Layout setCurrentPage={setCurrentPage}>
          <Home />
          <Places />
          <Reach />
          <Food />
          <Commute />
          <Hotels />
          <Weather />
        </Layout>
      )}
      {currentPage === 'gallery' && (
        <Gallery setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'history' && (
        <History setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;
