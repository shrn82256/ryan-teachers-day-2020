import React, { useState } from 'react';

import teachersDb from './data.json';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Footer from './components/Footer';
import TeachersGrid from './components/TeachersGrid';

function App() {
  const [teachers, setTeachers] = useState(teachersDb);

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Videos />
        <Search setTeachers={setTeachers} />
        <TeachersGrid teachers={teachers} />
        <Photos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
