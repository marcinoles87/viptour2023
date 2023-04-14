import React, { Component } from 'react'

import JSONDATA from '../data.json'

import './trips.scss'

export default class Trips extends React.Component {

  state = [
    {
      cliked : false,
    }
  ]

  render() {

    const handleOnClick = () => {
      
          this.setState({
            cliked: !this.state.cliked
          }
      )
    }

 
    return (
      <div className='trips-wrapper'>
        <h1></h1>
        <div className='trips-card'>
            {JSONDATA && JSONDATA.map( (item , index) => 
            <div className='trip-info ' key={index}>
              <h1>{item.name}</h1>
              <img src={item.im} alt=""></img>
              <button onClick={handleOnClick} >Info</button>
              {this.state.cliked ?<div> <p>Price : {item.price} Persone :{item.persone} Trip Time : {item.time}</p> </div>: null }
             
              </div>
            ) }
            

        </div>
      </div>
    )
  }
}
