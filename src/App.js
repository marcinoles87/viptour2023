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
    DATA
  )
}



  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <News></News>
      <div className='showTrip'>
      <h1>Now you see our trips...</h1>
      <button onClick={handleData}>Show Trips</button>
        </div>

        <div className='trips-wrapper'>
      {datas.map( (data,index) => {
        return(
          
          <Trips key={index}
           name={data.name} 
           cName={data.cName}
           picture={data.im}
           persone={data.persone}
           price={data.price}
           time={data.time}

          />
      
        )
      })}

</div>
      
    
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
