import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

import './App.css';
import News from './components/News';
import Trips from './components/Trips';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <News></News>
      <Trips></Trips>
      <Contact></Contact>
    </div>
  );
}

export default App;
