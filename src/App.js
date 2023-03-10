import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

import './App.css';
import News from './components/News';
import Trips from './components/Trips';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <News></News>
      <Trips></Trips>
    </div>
  );
}

export default App;
