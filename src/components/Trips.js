import React, { Component } from 'react'

import JSONDATA from '../data.json'

import './trips.scss'

export default class Trips extends React.Component {

  state = [
    {cliked : false,
    }
  ]

  render() {

    const handleOnClick = () => {
      
          this.setState({
            cliked: !this.state.cliked
          }
      )

      console.log(this.state.cliked)
    }
    return (
      <div className='trips-wrapper'>
        <h1>Trips</h1>
        <div className='trips-card'>
            {JSONDATA && JSONDATA.map( (item , index) => 
            <div className='trip-info ' key={index}>
              <h1>{item.name}</h1>
              <img src={item.im} alt=""></img>
              <div className='trips-btn'>
                <button onClick={handleOnClick}>Info</button>
              </div>
              
              {this.state.cliked ? <p>Price : {item.price} Persone :{item.persone} Trip Time : {item.time}</p>: null}
             
              </div>
            ) }
            

        </div>
      </div>
    )
  }
}
