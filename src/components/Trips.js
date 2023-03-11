import React, { Component } from 'react'

import JSONDATA from '../data/data.json'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>Trips
        <div className='trips-card'>
            {JSONDATA.map( (item , index) => {
                return <ul className={item.cName} key={item.index}>
                    <h1>{item.name}</h1>
                    <img src={item.img}></img>
                    <h3> Trip time :</h3>
                    <h4> Persone : </h4>
                    <h4> Price :</h4>
                </ul>
            })}
        </div>
      </div>
    )
  }
}
