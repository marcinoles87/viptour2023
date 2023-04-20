
import './trips.scss'

import React, { useState } from 'react'

export default function Trips(props) {

  let [cliked,setCliked] = useState(false)


    const handleOnClick = () => {
      setCliked(
        !cliked
      )
    }


  return (
   
            <div className='trips-card'>
                <div className='trip-info '>
                  <h1>{props.name}</h1>
                  <img src={props.picture} alt=""></img>
                 <button onClick={handleOnClick}>Detail</button>
                  {cliked ?<div className='trip-btn'> <p>Price : {props.price} Persone :{props.persone} Trip Time : {props.time}</p> </div>: null }
                 
                  </div>
            </div>
          
        )
  
}

