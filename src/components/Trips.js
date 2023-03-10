import React, { Component } from 'react'

import JSONDATA from '../data/data.json'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>Trips
        <div className='trips-card'>
            {JSONDATA.map( (item , index) => {
                return <ul className={item.cName}>
                    <h1>{item.name}</h1>
                    <img src={item.img}></img>
                </ul>
            })}
        </div>
      </div>
    )
  }
}
