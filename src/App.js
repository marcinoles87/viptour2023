import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import News from './components/News';
import Trips from './components/Trips';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <News></News>
      <Trips></Trips>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
