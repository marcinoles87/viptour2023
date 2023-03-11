import React, { Component } from 'react'

import JSONDATA from '../data/data.json'

import './trips.scss'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>
        <h1>Trips</h1>
        <div className='trips-card'>
            {JSONDATA.map( (item , index) => {
                return <ul className={item.cName} key={item.index}>
                  
                    <h1>{item.name}</h1>
                    <img src={item.img} alt='trips'></img>
                    <h3> Trip time : </h3>
                    <h4> Persone :{item.persone} </h4>
                    <h4> Price :</h4>
                  
                </ul>
            })}
        </div>
      </div>
    )
  }
}
