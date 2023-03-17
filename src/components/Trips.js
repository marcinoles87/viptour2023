import React, { Component } from 'react'

import JSONDATA from '../data.json'

import './trips.scss'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>
        <h1>Trips</h1>
        <div className='trips-card'>
            {JSONDATA && JSONDATA.map( (item , index) => 
            <div className='trip-info ' key={index}>
              <h1>{item.name}</h1>
              <img src={item.im} alt=""></img>
              <p>Price : {item.price}</p>
              <p>Persone :{item.persone}</p>
              <p>Trip Time : {item.time}</p>
              </div>
            ) }
            

        </div>
      </div>
    )
  }
}
