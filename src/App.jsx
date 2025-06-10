import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Places from './pages/Places';
import Commute from './pages/Commute';
import Food from './pages/Food';
import Hotels from './pages/Hotels';
import Weather from './pages/Weather';
import Reach from './pages/Reach';
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
