import React, { Component } from 'react'

import JSONDATA from '../data/data.json'

export default class Trips extends Component {
  render() {
    return (
      <div className='trips-wrapper'>Trips
        <div className='trips-card'>
            {JSONDATA.map( (item , index) => {
                return <ul>
                    <li>{item.name}</li>
                </ul>
            })}
        </div>
      </div>
    )
  }
}
