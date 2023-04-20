import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import News from './components/News';
import Trips from './components/Trips';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import DATA from './data.json'



function App() {

  console.log(DATA)

let [datas , setData] = useState([])

const handleData = () => {
  setData(
    datas=DATA
  )
}



  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <News></News>

      {datas.map( (data,index) => {
        
        <Trips></Trips>
      })}
      
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
