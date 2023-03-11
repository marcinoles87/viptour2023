import React, { Component } from 'react'

import JSONDATA from '../data.json'

import './trips.scss'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>
        <h1>Trips</h1>
        <div className='trips-card'>
            {JSONDATA && JSONDATA.map( (item) => 
              <img src={item.im} alt=""></img>
            ) }

        </div>
      </div>
    )
  }
}
