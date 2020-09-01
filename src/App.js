import React, { useState, useEffect } from 'react';

import teachersDb from './data.json';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Photos from './components/Photos';
import Footer from './components/Footer';
import TeachersGrid from './components/TeachersGrid';

function App() {
  // const [isLoading, setLoadingStatus] = useState(false);
  const [teachers, setTeachers] = useState(teachersDb);

  /* useEffect(() => {
    setLoadingStatus(false);
  }, []); */

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <div>Videos</div>
        <Search setTeachers={setTeachers} />
        <TeachersGrid teachers={teachers} />
        <Photos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
